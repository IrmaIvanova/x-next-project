import type { Metadata } from "next";
import { Header } from "@/components/Header";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div>
            <Header />
            {children}
        </div>
    );
}
