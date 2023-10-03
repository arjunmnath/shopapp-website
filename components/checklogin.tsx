'use client'
import { useEffect } from "react";
import { redirect } from 'next/navigation'

const CheckLogin = (props: { next: string, fallback: string }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {

            const clientToken = localStorage.getItem('clitkn');
            const _tmp: any = localStorage.getItem('iloin');
            const isLoggedIn = JSON.parse(_tmp)
            if (clientToken === null || isLoggedIn === null || !isLoggedIn.val) {
                redirect(props.fallback)
            } else if (props.next!=='') {
                redirect(props.next)
            }
        }
    }, [])
    return <></>
}

export default CheckLogin;