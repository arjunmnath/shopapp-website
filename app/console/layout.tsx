'use client'
import Header from "./components/header";
import CheckLogin from "@/components/checklogin";
import { CookiesProvider } from 'react-cookie';
import Navbar from "./components/navbar";
import "../custom.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CookiesProvider>
            <div className="relative">
                <Header />
                <CheckLogin next="" fallback="/signin" />
                <div className="flex flex-row relative z-[-1]">
                    <Navbar />
                    {children}
                </div>
            </div>


        </CookiesProvider>

    );
}
