import { NextResponse } from "next/server";
import * as db from "@/lib/dbhandle";
import { GenerateId, OTP } from "@/lib/utility";



type requestTypePOST = {
    utx: string,
    clientName: string,
    email: string,
    phone: number,
    outstanding: number,
}

type requestTypeDelete = {
    utx: string,
    clientId: string
}


export async function POST(request: Request) {
    try {
        const start = performance.now()
        const body: requestTypePOST = await request.json()
        const data = await db.readDataOne({
            collection: 'users', query: {
                "clientToken": body.utx,
            }
        });
        if (body.phone <= 0 || body.email === '' || body.clientName === '' || body.outstanding < 0) {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Invalid Client Receieved' })
        } else if (data !== null) {
            const collectionName = `${data.clientId}-clients`
            await db.writeData({
                collection: collectionName,
                data: [{
                    clientName: body.clientName,
                    phone: body.phone,
                    email: body.email,
                    clientId: GenerateId(10),
                    joinedOn: new Date().toLocaleString(),
                    outstanding: body.outstanding

                }]
            }).catch(err => {
                return NextResponse.json({
                    success: false, code: 503, message: "Error: Couldn't Add The Client To Database"
                })
            });
            const end = performance.now()

            return NextResponse.json({
                success: true, code: 200, message: 'Note: New Client Was Added Successfully',
                ExecutionTime: `${end - start} ms`
            })

        } else {
            NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Try Logging In Again ', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}






export async function DELETE(request: Request) {
    try {
        const start = performance.now()

        const body: requestTypeDelete = await request.json()
        const data = await db.readDataOne({
            collection: 'users', query: {
                "clientToken": body.utx,
            }
        });
        if (body.utx === null || body.clientId === null) {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Invalid Client Details Receieved' })
        } else if (data !== null) {
            const collectionName = `${data.clientId}-clients`
            const res = await db.deleteDataOne({
                collection: collectionName,
                query: {
                    clientId: body?.clientId
                }
            }).catch(err => {
                return NextResponse.json({
                    success: false, code: 503, message: "Error: Couldn't Delete The Client From Database"
                })
            });
            const end = performance.now()
            return NextResponse.json({
                success: true, code: 200, message: 'Note: Client Was Deleted Successfully', ExecutionTime: `${end - start} ms`
            })


        } else {
            NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Try Logging In Again ', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const start = performance.now()
    try {
        const token: any = searchParams.get('utx')
        const userdetails = await db.readDataOne({
            collection: 'users', query: {
                'clientToken': token
            }
        })
        if (userdetails !== null) {
            const productdetails = await db.readDataMany({ collection: `${userdetails?.clientId}-clients`, query: {} })
            const end = performance.now()
            return NextResponse.json({
                success: true, code: 200, data: productdetails, message: "Note: Api Request Successfully Completed", ExecutionTime: `${end - start} ms`
            })
        } else {
            return NextResponse.json({
                success: false, code: 401, message: "Warning: Invalid Client Token"
            })
        }

    } catch (err) {
        return NextResponse.json({ success: false, code: 500, message: 'Error: Internal Api Error' });
    }
}