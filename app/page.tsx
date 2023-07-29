'use client'

import CheckLogin from "@/components/checklogin"

export default function App () {

    return <CheckLogin next='/console' fallback="/signin"/>
}