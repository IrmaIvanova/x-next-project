
import Link from "next/link";
import type { INavbarItem } from "@/shared/types/navbar.interface";


export function NavbarItem({ href, navbarItem, isActive,  }: INavbarItem) {
    return (
        <Link
            className={`${isActive ? "text-white bg-stone-400/30 rounded-sm" : ""} px-4 `}
            href={href}>
            {navbarItem.name}
        </Link>

    )
}