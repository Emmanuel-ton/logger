import { IconType } from "react-icons"
import { CgEditMask, CgHome } from "react-icons/cg"
import { CiSettings } from "react-icons/ci"

export type NavItem = {
    label: String,
    icon: IconType,
    path: String
}


export type TopNavItems = {
    label: String,
    path: String
}

export const topNavItems: TopNavItems[] = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "Create Log",
        path: "/create-log"
    },
    {
        label: "Logs",
        path: "/logs"
    },
    {
        label: "Profle",
        path: "/profile"
    },
    {
        label: "Settings",
        path: "/settings"
    },
]



export const navItems: NavItem[] = [
    {
        label: "Home",
        icon: CgHome,
        path: "/"
    },

    {
        label: "Logs",
        icon: CgEditMask,
        path: "/logs"
    },
    {
        label: "Settings",
        icon: CiSettings,
        path: "/settings"
    },
]