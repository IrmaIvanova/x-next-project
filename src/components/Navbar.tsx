'use client'

import Link from "next/link";
import type { INavbar } from "@/shared/types/navbar.interface";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { NavbarItem } from "./NavbarItem";




export function Navbar({ links }: INavbar) {
    const pathname = usePathname()
    console.log("pathname", pathname)
    return (
        <nav className="flex gap-6 text-white/80">

            {links.map(link => <NavbarItem
                key={"key" + link.name}
                navbarItem={link}
                isActive={!!match(link.route)(pathname)}
                href={link.route} />)}

        </nav>
    )
}
