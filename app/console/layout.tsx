'use client'
import Header from "./components/header";
import CheckLogin from "@/components/checklogin";
import { CookiesProvider } from 'react-cookie';
import Navbar from "./components/navbar";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CookiesProvider>
            <div id="root" className="background">
                <CheckLogin next="" fallback="/signin" />
                <Header />
                <div className="flex flex-row">
                    <Navbar />
                    {children}
                </div>


            </div>
        </CookiesProvider>

    );
}
