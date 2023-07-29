'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckLogin = (props: { next: string, fallback: string }) => {
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined') {

            const clientToken = localStorage.getItem('clitkn');
            const _tmp: any = localStorage.getItem('iloin');
            const isLoggedIn = JSON.parse(_tmp)
            if (clientToken === null || isLoggedIn === null || !isLoggedIn.val) {
                router.push(props.fallback)
            } else {
                router.push(props.next)
            }
        }
    }, [])
    return <></>
}

export default CheckLogin;