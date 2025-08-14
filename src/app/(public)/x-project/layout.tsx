import { Header } from "@/myComponents/Header";
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
