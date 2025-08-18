import { Header } from "@/myComponents/Header";


export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        // <div  className="bg-indigo-200 bg-[url('/home-bg-image.png')] dark:bg-black  dark:bg-[url('/home-bg-image-dark.png')] bg-cover bg-center ">
        <div>
            {children}
        </div>
    );
}
