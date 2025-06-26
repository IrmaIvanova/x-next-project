import Image from "next/image";
import Link from "next/link";


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
            <nav className="flex items-center gap-3">
                <Link href='/'>Home</Link>
                <Link href='/'>Explore</Link>
                <Link href='/'>Profile</Link>
            </nav>
        </header>
    )
}
