import { Header } from "@/myComponents/Header";


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Irma Next project',
        default: 'Irma Next project'
    },
    description: "Studing Next JS",
    applicationName: "Irma Next project"
};

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
