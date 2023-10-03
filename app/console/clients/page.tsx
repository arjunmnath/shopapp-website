import Page from './mainpage'


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Clients"
}

export default function App() {
    return <div className="h-full w-full flex justify-center">
        <Page />
    </div>
}