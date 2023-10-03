import Head from 'next/head'
import type { Metadata } from "next";

export const metadata:Metadata = {
    title: "Products"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <title>Products</title>
            </Head>
            {children}
        </>

    );
}
