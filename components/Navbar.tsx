import { cn } from "@/utils/cn"
import { BadgePercent, CalendarCheck, Heart, LucideIcon, Search, User } from "lucide-react"
import { memo } from "react"

export interface NavbarItem {
    id: string
    label: string
    icon: LucideIcon
    path: string
    active?: boolean
}

const Navbar = () => {

    const navbarItems: NavbarItem[] = [
        {
            id: "explore",
            label: "Explore",
            icon: Search,
            path: "/explore",
        },
        {
            id: "offers",
            label: "Offers",
            icon: BadgePercent,
            path: "/offers",
            active: true,
        },
        {
            id: "bookings",
            label: "Bookings",
            icon: CalendarCheck,
            path: "/bookings",
        },
        {
            id: "wishlist",
            label: "Wishlist",
            icon: Heart,
            path: "/wishlist",
        },
        {
            id: "profile",
            label: "Profile",
            icon: User,
            path: "/profile",
        },
    ]

    return (
        <nav className="w-full border-t border-border/20 bg-background">
            <ul className="flex items-center justify-around py-3">
                {navbarItems.map((item: NavbarItem) => {
                    const Icon = item.icon
                    const isActive = item.active === true

                    return (
                        <li
                            key={item.id}
                            className={cn(
                                "flex flex-col items-center gap-1 text-sm cursor-pointer transition-colors",
                                isActive
                                    ? "text-secondary font-bold"
                                    : "text-muted hover:text-foreground"
                            )}
                        >
                            <Icon
                                size={22}
                                strokeWidth={isActive ? 2.2 : 1.8}
                                className={cn(isActive && "text-primary")}
                            />
                            <span className={cn(
                                isActive
                                    ? "text-secondary font-bold"
                                    : "text-muted hover:text-foreground"
                            )}>{item.label}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default memo(Navbar)
