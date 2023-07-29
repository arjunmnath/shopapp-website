import { NextResponse } from "next/server";
import { createCollection, readDataOne, writeData } from "@/lib/dbhandle";
import { v4 as uuid } from 'uuid';
import {GenerateId, OTP} from "@/lib/utility";



type requestType = {
    utx: string,
    name: string,
    stock: number,
    costPrice: number,
    sellingPrice: number,
    profit: number,

}

export async function POST(request: Request) {
    try {
        const body: requestType = await request.json()
        const data = await readDataOne({
            collection: 'users', query: {
                "clientToken": body.utx,
            }
        });
        if (body.profit<=0 || body.costPrice <=0 || body.sellingPrice<= 0|| body.stock<= 0 || body.name === '') {
            return NextResponse.json({ success: false, code: 400, message: 'Warning: Bad Request, Invalid Product Receieved' })
        } else if (data !== null) {
            const collectionName = `${data.clientId}-products`
            await writeData({
                collection: collectionName,
                data: [{
                    productName: body.name,
                    stock: body.stock,
                    costPrice: body.costPrice,
                    sellingPrice: body.sellingPrice,
                    profit: body.profit,
                    productId: GenerateId(10),
                    stockUpdateOn: new Date().toLocaleString()

                }]
            }).catch(err => {
                return NextResponse.json({
                    success: false, code: 503, message: "Error: Couldn't Add The Product To Database"
                })
            });
            return NextResponse.json({
                success: true, code: 200, message: 'Note: New Product Was Added Successfully'
            })

        } else {
            NextResponse.json({ success: false, message: 'Warning: Credentials Doesn\'t Match Try Logging In Again ', code: 404 })
        }
    } catch (err) {
        NextResponse.json({ success: false, message: 'Error: Internal Error', 'ErrorMsg': err });
    }

}

