import { memo } from "react"
import { Copy } from "lucide-react"
import { cn } from "@/utils/cn"
import Image from "next/image"

export interface Cards {
    amount: string
    title: string
    description: string
    link: string
    color: string
    logo?: string
    isCollect?: boolean,
    isEvent?: boolean;
}

const Card = ({
    amount,
    title,
    description,
    link,
    color,
    logo,
    isCollect = false,
    isEvent = true
}: Cards) => {
    return (
        <div className="flex w-full overflow-hidden rounded bg-card">
            <div
                className="flex items-center justify-center w-22"
                style={{ backgroundColor: color }}
            >
                <p className="-rotate-90 whitespace-nowrap text-white text-3xl font-extrabold tracking-wide">
                    {amount}
                </p>

            </div>

            <div className="flex-1 p-4 border-l-2 border-secondary border-dashed">
                <div className="flex items-start justify-between">
                    <div className="flex gap-2">
                        {logo && <Image src={logo} alt={title} width={30} height={30} />}
                        <h3 className="text-lg text-text font-bold tracking-wide">
                            {title}
                        </h3>
                    </div>
                    {isEvent && <>
                        {isCollect ? <div>
                            <span className="text-secondary font-bold">Collect</span>
                        </div> : <div className="flex gap-1 items-center">
                            <Copy
                                size={15}
                                className="text-primary"
                            />
                            <span className="text-secondary font-bold">Copy</span>
                        </div>}
                    </>}
                </div>

                <p className="mt-2 text-sm text-muted leading-relaxed">
                    {description}
                </p>

                <div className="my-3 h-px bg-border/20" />

                <a
                    href={link}
                    className={cn(
                        "text-sm font-semibold",
                        "text-muted hover:text-primary transition"
                    )}
                >
                    Read more
                </a>
            </div>
        </div>
    )
}

export default memo(Card)
