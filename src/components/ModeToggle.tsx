"use client"

import { Moon, Sun, SunMoon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isSystemDark, setIsSystemDark] = useState(false)

    // Добавляем задержку для рендеринга иконки до гидратации

    useEffect(() => {
        setMounted(true)
        // 1. Определяем системную тему при монтировании
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setIsSystemDark(mediaQuery.matches)

        // 2. Слушаем изменения системной темы
        const handler = (e: MediaQueryListEvent) => setIsSystemDark(e.matches)
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])
    // 3. Вычисляем текущую тему (учитывая system)
    const currentTheme = theme === "system" ? (isSystemDark ? "dark" : "light") : theme
    if (!mounted) {
        return (
            <Button variant="outline" size="icon" disabled>
                <span className="sr-only">Loading theme</span>
            </Button>
        )
    }

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full" >

                    {currentTheme === "dark" ? <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all" />
                        : <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all" />}

                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                    checked={theme === "light"}
                    onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === "dark"}
                    onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                    checked={theme === "system"}
                    onClick={() => setTheme("system")}>
                    System
                </DropdownMenuCheckboxItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}