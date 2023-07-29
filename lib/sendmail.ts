import nodemailer from "nodemailer";

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// TODO: Implement DKIM in the site currently it might be classified as spam


export const sendEmail = async (data: EmailPayload) => {
  const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  }
  try {  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM_EMAIL,
    ...data,
  })
  const statusCode = info.response.split(' ')[0]
  if (statusCode==='250' || statusCode==='200') {
    return true
  } else {
    return false
  }
} catch (err) {
    return false};


}