import { render } from "@react-email/render";
import MailBody from './template'
import { sendEmail } from "@/lib/sendmail";
import { NextResponse } from "next/server";
import {OTP} from '@/lib/utility'
import * as db from '@/lib/dbhandle'
import { v4 as uuidv4 } from 'uuid';
import { addMins } from "@/lib/utility";
import { readDataMany, deleteDataMany } from "@/lib/dbhandle";
export async function GET(request: Request) {
  const otp = OTP()
  const id = uuidv4()
  const d = new Date().getTime();
  const { searchParams } = new URL(request.url)

  try {
    const mail: any = searchParams.get('mail')
    const _tmp: any = searchParams.get('utf8')
    const login: boolean = JSON.parse(_tmp)
    const user = await readDataMany({
      collection: 'users', query: {
        "mail": mail
      }
    })
    deleteDataMany({
      collection: 'otp',
      query: {
        otpvalidtime: { $lt: new Date().getTime() }
      }
    })
    if (user.length > 0 && !login) {
      return NextResponse.json({
        success: false,
        code: 403,
        message: 'Warning: Mail is already in use',
      })
    } else if (user.length === 0 && login) {
      return NextResponse.json({
        success: false,
        code: 404,
        message: 'Warning: No Account Found'
      })
    }
    else {
      const res = await sendEmail({
        to: mail,
        subject: "Authentication code",
        html: render(MailBody({ otp: otp })),
      });
      if (res) {
        db.writeData({
          collection: 'otp',
          data: [
            {
              otp: otp,
              requestsendtime: new Date(d).toLocaleString(),
              otpvalidtime: addMins(d, 5),
              mail: mail,
              authid: id,
              login: login
            }
          ]
        })
        return NextResponse.json({ success: true, id: id, env: process.env.MONGODB_URI, code: 200, message: 'Note: Mail Has Has Been Sent' });
      } else {
        return NextResponse.json({ success: false, code: 503, message: 'Warning: Error In Sending Email' })
      }
    }
  } catch (err) {
    return NextResponse.json({ success: false, code: 500, message: 'Error: Api Error' })
  }
}