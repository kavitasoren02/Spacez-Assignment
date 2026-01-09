import { memo } from "react"
import Link from "next/link"
import { Cards } from "./Card"
import { cn } from "@/utils/cn"
import Image from "next/image"
import Button from "./ui/Button"

const Giftcard = ({
    amount,
    title,
    description,
    link,
    color,
    logo,
    isCollect = false,
}: Cards) => {
    return (
        <div className="w-full rounded-xl flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4 bg-card p-4">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-[#8B5A3C] font-medium">
                        {title}
                    </p>
                    <h2 className="text-2xl font-extrabold text-[#8B5A3C]">
                        {amount} ✨
                    </h2>
                    <p className="text-sm text-muted max-w-55">
                        {description}
                    </p>
                </div>

                {logo && <div className="relative w-30">
                    <img src={logo} className="absolute right-0 -top-8 z-10 w-30" />
                </div>}
            </div>

            {isCollect && (
                <Button
                    variant="primary"
                    className="w-full rounded"
                >
                    Claim gift cards »
                </Button>
            )}
        </div>
    )
}

export default memo(Giftcard)
