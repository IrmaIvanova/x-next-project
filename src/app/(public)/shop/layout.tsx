import { Navbar } from "@/components/Navbar";
import { PageTitle } from "@/components/PageTitle";
import { SHOP_NAVBAR } from "@/shared/data/navbar.data";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {

    return (
        <div className="w-full px-4 py-8">
            <PageTitle title="Shop" />
            <Navbar links={SHOP_NAVBAR.links} />

            {children}
        </div>
    )
}