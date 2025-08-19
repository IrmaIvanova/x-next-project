import { Header } from "@/myComponents/Header";
import Home from "./(home)/page";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <div className="dark:bg-black">
            <Header />
            {children}
        </div>
    );
}
