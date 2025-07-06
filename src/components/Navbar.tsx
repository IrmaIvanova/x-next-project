import Link from "next/link";
import { PAGES } from "../config/pages.config";
import type { INavbar } from "@/shared/types/navbar.interface";




export function Navbar({ links }: INavbar) {
    return (
        <nav className="flex gap-6 text-white/80">

            {links.map(link => <Link key={"key" + link.name} href={link.route}>{link.name}</Link>)}

        </nav>
    )
}
