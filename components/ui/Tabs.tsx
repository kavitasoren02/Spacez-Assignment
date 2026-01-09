"use client"

import { cn } from "@/utils/cn"
import { memo, useEffect, useState } from "react"

export interface TabItem {
    title: string
    targetId: string
}

interface Props {
    tabs: TabItem[]
    offset?: number
}

const Tabs = ({ tabs, offset = 180 }: Props) => {
    const [activeId, setActiveId] = useState<string>(tabs[0]?.targetId)

    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        const top =
            el.getBoundingClientRect().top + window.scrollY - offset

        window.scrollTo({
            top,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            {
                rootMargin: `-${offset}px 0px -60% 0px`,
                threshold: 0,
            }
        )

        tabs.forEach((tab) => {
            const el = document.getElementById(tab.targetId)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [tabs, offset])

    return (
        <div className="bg-background">
            <div className="flex justify-around">
                {tabs.map((tab) => {
                    const isActive = activeId === tab.targetId

                    return (
                        <button
                            key={tab.targetId}
                            onClick={() => handleClick(tab.targetId)}
                            className={cn(
                                "relative px-4 py-3 text-sm font-medium transition-colors",
                                isActive
                                    ? "text-secondary border-b-2 border-primary"
                                    : "text-muted hover:text-foreground"
                            )}
                        >
                            {tab.title}

                            {isActive && (
                                <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-foreground rounded-full" />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default memo(Tabs)
