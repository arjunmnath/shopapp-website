import { NextResponse } from "next/server";
import * as db from '@/lib/dbhandle'
import { generateKey } from "@/lib/encryption";

export async function GET(request: Request) {
    try {
        return NextResponse.json({
            success: true, code: 200, key: generateKey(), message: "Note: Api Request Successfully Completed"
        })

    } catch (err) {
        return NextResponse.json({ success: false, code: 500, message: 'Error: Api Error' })
    }
}