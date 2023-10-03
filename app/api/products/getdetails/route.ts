import { NextResponse } from "next/server";
import * as db from '@/lib/dbhandle'
import { Product } from "@/types/product";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    try {
        const token:any = searchParams.get('utx')
        const min:any = searchParams.get('min')
        const userdetails = await db.readDataOne({
            collection: 'users', query: {
                'clientToken': token
            }
        })
        if (userdetails !== null) {
            const productdetails = await db.readDataMany({ collection: `${userdetails?.clientId}-products`, query: {} })
            return NextResponse.json({
                success: true, code: 200, data: productdetails.map((product:Product)=> (
                    {
                        productName: product.productName,
                        stock: product.stock,
                        profit: product.profit,
                        sellingPrice: product.sellingPrice,
                        costPrice: product.costPrice,
                        stockUpdate: product.stockUpdate,
                        productId: product.productId
                    }
                )), message: "Note: Api Request Successfully Completed",
                min: min
            })
        } else {
            return NextResponse.json({
                success: false, code: 401, message: "Warning: Invalid Client Token"
            })
        }

    } catch (err) {
        return NextResponse.json({ success: false, code: 500, message: 'Error: Internal Api Error'});
    }
}