import { NextResponse } from "next/server";
import { createCollection, readDataOne, writeData } from "@/lib/dbhandle";
import { v4 as uuid } from 'uuid';
import { OTP } from "@/lib/utility";
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
        if (body.authid === null || body.otp === null || data?.login === true) {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Credentials Not Found' })
        } else if (data !== null) {
            const valid = new Date().getTime() < data?.otpvalidtime
            if (valid && body.otp === data?.otp && body.authid === data?.authid) {
                const clientToken = uuid()
                const clientId = OTP()
                await writeData({
                    collection: 'users', data: [
                        {
                            clientToken: clientToken,
                            mail: data.mail,
                            joined: data.requestsendtime,
                            clientId: clientId,
                            Logins: []
                        }
                    ]
                })
                const collectionName = `${data.clientId}-clients`
                await createCollection({ name: collectionName })
                await createCollection({ name: `${clientId}-clients` })
                await writeData({
                    collection: collectionName,
                    data: [{
                        clientName: "<Sold>",
                        phone: "",
                        email: "",
                        clientId: "AAAAAAAAAA",
                        joinedOn: new Date().toLocaleString(),
                        outstanding: 0

                    }]
                })
                return NextResponse.json({ success: true, clientToken: clientToken,FernetKey: generateKey(), message: 'Note: Successfully authenticated', code: 200 });
            } else {
                return NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Or Otp Expired', code: 303 });
            }
        } else {
            NextResponse.json({ success: false, message: 'Warning: No Entry Found', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}

