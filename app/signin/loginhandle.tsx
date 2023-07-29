'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { LogIn } from 'lucide-react';

type propsType = {
    email: string,
}

const LoginHandle = (props: propsType) => {
    const router = useRouter();

    const { toast } = useToast();
    const [disabled, setDisabled] = useState(true);
    const [otpval, setOtpVal] = useState('');
    const clickHandle = async () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(props.email)) {
            console.log('valid email address')
            if (disabled) {
                const url = `/api/sendmail/auth?mail=${encodeURIComponent(props.email)}&utf8=true`
                const send = await fetch(url);
                const data = await send.json()
                console.log(data.message)

                if (data.success) {
                    setDisabled(false)
                    sessionStorage.setItem('auth-id', data.id)
                    toast({
                        title: "Bravo! Authentication Code Sent...",
                        description: "Please Check the Spam Folder In Case you Don't Find It In Inbox",
                    })
                } else if (data.code === 404) {
                    toast({
                        title: "Oops! Account Not Found",
                        description: "Please Check Your Email Or Consider Signing In...",
                        variant: "destructive"
                    })
                } else {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: "There was a problem with your request.",
                        variant: "destructive"
                    })
                }
            } else {
                toast({
                    title: "Wait! OTP has already been sent",
                    description: "Please Check the Spam Folder In Case you Don't Find It In Inbox"
                })
            }
        } else {
            console.log('invalid email address')
            toast({
                title: "Oops! Something went wrong",
                description: "Invalid Email Address",
                variant: "destructive"
            })
        }
    }

    const otpHandle = async () => {
        if (parseInt(otpval) > 1000000 && parseInt(otpval) < 9999999) {
            toast({
                title: "Checking..."
            })
            const res = await fetch('/api/authentication/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "authid": sessionStorage.getItem('auth-id'),
                    "otp": parseInt(otpval)
                })
            })
            const content = await res.json();
            console.log(content.message);
            if (content.success === true) {
                localStorage.setItem('clitkn', content.clientToken)
                localStorage.setItem('iloin', JSON.stringify({ val: true }))
                toast({
                    title: 'Nice Job!',
                    description: "You Have Successfully Logged In",
                })
                router.push('/console')
            } else {
                toast({
                    title: 'Oops!',
                    description: "We Encountered An Otp Error"
                })
            }

        }
        else {
            toast({
                title: "Sorry! Your OTP Must Be A 7 Digit Number",
                description: "Copy The Code To Initiate Your Account"
            })
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-1/2" variant="outline" onClick={clickHandle}>
                    <LogIn className="mx-2 p-[0.15rem]" />
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Authentication</DialogTitle>
                    <DialogDescription>
                        {disabled ? <>Trying To Login Using Mail &apos;{props.email}&apos;</> : <>The Authentication Code Has Been Send To {props.email}</>}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            OTP
                        </Label>
                        <Input disabled={disabled} id="name" value={otpval} onChange={(e) => setOtpVal(e.target.value)} type="number" placeholder="xxxxxx" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant='outline' onClick={() => router.push('/docs/otp-not-found')}>Need Help?</Button>
                    <Button type="submit" onClick={otpHandle}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default LoginHandle;