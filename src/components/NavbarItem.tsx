
import Link from "next/link";
import type { INavbarItem } from "@/shared/types/navbar.interface";


export function NavbarItem({ href, navbarItem, isActive }: INavbarItem) {
    return (
        <Link
         key={"key" + navbarItem.name}
            className={isActive ? "text-white" : ""}
            href={href}>
            {navbarItem.name}
        </Link>

    )
}