import { Header } from "@/components/Header";
import Home from "./(home)/page";


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
