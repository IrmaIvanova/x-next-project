import { HeaderRS } from "@/components/Header";

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

        <div className="mx-auto w-full max-w-7xl">
            <HeaderRS />
            <div className="px-4 py-2">
                {children}
            </div>
        </div>
    );
}
