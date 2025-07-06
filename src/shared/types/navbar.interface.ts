export interface INavbar {
    links: ILink[]
}

export interface ILink {
    name: string;
    route: string
}
export interface INavbarItem {
    navbarItem: ILink;
    href: string;
    isActive: boolean
}