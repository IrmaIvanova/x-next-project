import Image from "next/image";
import Link from "next/link";
import { PAGES } from "../config/pages.config";
import { Navbar } from "./Navbar";
import { NAVBAR } from "@/shared/data/navbar.data";


export function Header() {
    return (
        <header className="border-b bprder-white/10 px-6 py-4 flex items=center justify-between bg-black">
            <Link href='/'
                className="flex items-center gap-3">
                <Image
                    src='/x-logo.svg'
                    alt='X logo'
                    width={28}
                    height={28}
                    priority />
            </Link>
            <Navbar links={NAVBAR.links} />
        </header>
    )
}
