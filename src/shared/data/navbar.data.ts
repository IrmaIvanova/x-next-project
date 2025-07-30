import { PAGES } from "@/config/pages.config";
import type {  INavbar } from "../types/navbar.interface";

export const NAVBAR: INavbar = {
    links: [
        {
            name: "Home",
            route: `${PAGES.HOME}`
        },
        {
            name: "Profile",
            route: `${PAGES.PROFILE(123)}`
        },
        {
            name: "Explore",
            route: `${PAGES.EXPLORE}`
        },
        {
            name: "Shop",
            route: `${PAGES.SSR}`
        }
    ]
}

export const SHOP_NAVBAR: INavbar = {
    links: [
        {
            name: "SSR",
            route: `${PAGES.SSR}`
        },
        {
            name: "SSG",
            route: `${PAGES.SSG}`
        },
        {
            name: "ISR",
            route: `${PAGES.ISR}`
        },
      
    ]
}
