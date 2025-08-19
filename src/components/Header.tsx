import { Home, File, Users } from "lucide-react"
import { NavButton } from "@/components/NavButton"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export function HeaderRS() {
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton
                        href="/repair-shop/home"
                        label="Home"
                        icon={Home} />

                    <Link
                        href="/repair-shop/home"
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">

                    <NavButton
                        href="/repair-shop/tickets"
                        label="Tickets"
                        icon={File} />

                    <NavButton
                        href="/repair-shop/customers"
                        label="customers"
                        icon={Users} />
                    <ModeToggle />


                </div>
            </div>
        </header>
    )
}
