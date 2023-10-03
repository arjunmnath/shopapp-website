import { NextResponse } from "next/server";
import * as db from '@/lib/dbhandle'

const PRODUCT_KEYS = ['productName']
const DATA_KEYS = ['products', 'clients']

export async function GET(request: Request) {
    const start = performance.now()
    const { searchParams } = new URL(request.url)
    try {
        const token: any = searchParams.get('utx')
        const userdetails = await db.readDataOne({
            collection: 'users', query: {
                'clientToken': token
            }
        })
        if (userdetails !== null) {
            const readResult = await db.readDataManyMultiple([{ collection: `${userdetails?.clientId}-products`, query: {} }, { collection: `${userdetails?.clientId}-clients`, query: {} }])
            const end = performance.now()

            return NextResponse.json({
                success: true, code: 200, data: readResult, message: "Note: Api Request Successfully Completed", ExecutionTime: `${end - start} ms`
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