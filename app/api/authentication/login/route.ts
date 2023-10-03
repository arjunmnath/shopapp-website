import { NextResponse } from "next/server";
import { readDataOne, updateDataOne,  } from "@/lib/dbhandle";
import { generateKey } from "@/lib/encryption";

type requestType = {
    authid: string
    otp: number
}

export async function POST(request: Request) {
    try {
        const body: requestType = await request.json()
        const data = await readDataOne({
            collection: 'otp', query: {
                "authid": body.authid,
            }
        });
        if (body.authid === null || body.otp === null || data?.login === false) {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Credentials Not Found' })
        }

        if (data !== null) {
            const valid = new Date().getTime() < data?.otpvalidtime
            if (valid && body.otp === data?.otp && body.authid === data?.authid) {
                const clientDetails = await readDataOne({
                    collection: 'users',
                    query: {
                        "mail": data?.mail
                    }
                })
                const response = await updateDataOne({
                    collection: 'users',
                    query: {
                        "_id": clientDetails?._id
                    },
                    newdata: {
                        clientToken: clientDetails?.clientToken,
                        mail: clientDetails?.mail,
                        joined: clientDetails?.joined,
                        clientId: clientDetails?.clientId,
                        Logins: [
                            new Date().toLocaleString(), ...clientDetails?.Logins
                        ]                        
                    }
                }).catch(error => console.log(error));
                return NextResponse.json({ success: response?.acknowledged, clientToken:clientDetails?.clientToken, FernetKey: generateKey(),  message: 'Note: Successfully authenticated', code: 200 });
            } else {
                return NextResponse.json({ success: false, valid: {
                    data: valid,
                    curtime: new Date().toLocaleString(),
                    validtime: new Date(data?.otpvalidtime).toLocaleString()
                }, message: 'Warning: Credentials Doesn\'t Match Or Otp Expired', code: 303 });
            }
        } else {
            NextResponse.json({ success: false, message: 'Warning: No Entry Found', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}

