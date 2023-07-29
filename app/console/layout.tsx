import Header from "./components/header";
import CheckLogin from "@/components/checklogin";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <CheckLogin next="" fallback="/signin" />
            <Header />

                {children}
        </>

    );
}
