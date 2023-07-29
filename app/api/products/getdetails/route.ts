import { NextResponse } from "next/server";
import { OTP } from '@/lib/utility'
import * as db from '@/lib/dbhandle'
import { v4 as uuidv4 } from 'uuid';
import { addMins, GenerateId } from "@/lib/utility";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = GenerateId(10)
    try {
        const token: any = searchParams.get('utx')
        const userdetails = await db.readDataOne({
            collection: 'users', query: {
                'clientToken': token
            }
        })
        if (userdetails !== null) {
            const productdetails = await db.readDataMany({ collection: `${userdetails?.clientId}-products`, query: {} })
            return NextResponse.json({
                success: true, code: 200, data: productdetails.map((product) => (
                    {
                        name: product.productName,
                        stock: product.stock,
                        profit: product.profit,
                        sellingPrice: product.sellingPrice,
                        costPrice: product.costPrice,
                        stockUpdate: product.stockUpdateOn,
                        productId: product.productId
                    }
                )), message: "Note: Api Request Successfully Completed"
            })
        } else {
            return NextResponse.json({
                success: false, code: 401, message: "Warning: Invalid Client Token"
            })
        }

    } catch (err) {
        return NextResponse.json({ success: false, code: 500, message: 'Error: Api Error' })
    }
}