import { NextResponse } from "next/server";
import { deleteDataOne, readDataOne } from "@/lib/dbhandle";
import { GenerateId, OTP } from "@/lib/utility";



type requestType = {
    utx: string,
    productId: string
}

export async function POST(request: Request) {
    try {
        const body: requestType = await request.json()
        const data = await readDataOne({
            collection: 'users', query: {
                "clientToken": body.utx,
            }
        });
        if (body.utx === null || body.productId === null) {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Invalid Product Receieved' })
        } else if (data !== null) {
            const collectionName = `${data.clientId}-products`
            const res = await deleteDataOne({
                collection: collectionName,
                query: {
                    productId: body?.productId
                }
            }).catch(err => {
                return NextResponse.json({
                    success: false, code: 503, message: "Error: Couldn't Delete The Product From Database"
                })
            });
            return NextResponse.json({
                success: true, code: 200, message: 'Note:  Product Was Deleted Successfully',
            })


        } else {
            NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Try Logging In Again ', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}

