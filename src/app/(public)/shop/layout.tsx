'use client'

import { Navbar } from "@/components/Navbar";
import { PageTitle } from "@/components/PageTitle";
import { SHOP_NAVBAR } from "@/shared/data/navbar.data";
import dynamic from "next/dynamic";
import type { PropsWithChildren } from "react";

const DynamicShopMenu = dynamic(
    () => import("@/components/Navbar").then(mod => mod.Navbar),
    { ssr: false }
)

export default function Layout({ children }: PropsWithChildren<unknown>) {

    return (
        <div className="w-full px-4 py-8">
            <PageTitle title="Shop" />
            <DynamicShopMenu links={SHOP_NAVBAR.links} />

            {children}
        </div>
    )
}