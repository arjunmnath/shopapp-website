interface mailProps {
    otp: number
}

const MailBody = (props:mailProps) => {
    return <>Your otp is {props.otp}</>
}

export default MailBody;