import { NextResponse } from "next/server";
import * as db from '@/lib/dbhandle'


interface requestTypePOST {
    utx: string,
    clientId: string,
    address: {
        sitename: string,
        streetaddress: string,
        city: string,
        district: string,
        state: string,
        pin: number,
    },
    product: {
        productId: string,
        qty: number,
    },
    carrier: {
        name: string,
        vehicleNo: string,
    },
    remarks: string,
    credit: boolean,
    loading: boolean,
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
        if (body.clientId == null || body.clientId === undefined || body.product.productId === null || body.product.productId === undefined) {
            return NextResponse.json({
                success: false, code: 400, message: 'Error: Bad Request ! Invalid Details received'
            })
        } else if (data!==null) {
            const collectionName = `${data.clientId}-sales`
            await db.writeData({
                collection: collectionName,
                data: [{
                    clientId: body.clientId,
                    product: body.product,
                    remarks: body.remarks,
                    carrier: body.carrier,
                    address: body.address,
                    loading: body.loading,
                    credit: body.credit,
                    date: new Date().toLocaleString(),
                }]
            }).catch(err => {
                return NextResponse.json({
                    success: false, code: 503, message: "Error: Couldn't Add The Client To Database"
                })
            });
            const end = performance.now()

            return NextResponse.json({
                success: true, code: 200, message: 'Note: New Client Was Added Successfully',
                ExecutionTime: `${end - start}ms`
            })
        }
        else {
            return NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Try Logging In Again ', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}