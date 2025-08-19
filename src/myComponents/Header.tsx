import Image from "next/image";
import Link from "next/link";

import { Navbar } from "./Navbar";
import { NAVBAR } from "@/shared/data/navbar.data";
import { ModeToggle } from "@/components/ModeToggle";
import { XLogo } from "./XLogo";


export function Header() {
    return (
        <header className="border-b dark:border-white/10 px-6 py-4 flex items-center justify-between dark:bg-black">
            <Link href='/'
                className="flex items-center gap-3">
                <XLogo />
            </Link>
            <div className="flex">
                <Navbar links={NAVBAR.links} />
                <ModeToggle />
            </div>

        </header>
    )
}
