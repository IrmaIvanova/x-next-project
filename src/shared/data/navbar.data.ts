import { PAGES } from "@/config/pages.config";
import type { ILink, INavbar } from "../types/navbar.interface";

export const NAVBAR: INavbar = {
    links: [
        {
            name: "Home",
           route: `${PAGES.HOME()}`
        },
        {
            name: "Profile",
            route: `${PAGES.PROFILE(123)}`
        },
        {
            name: "Explore",
            route: `${PAGES.EXPLORE()}`
        }
    ]
}