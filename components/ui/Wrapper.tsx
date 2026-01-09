import { cn } from "@/utils/cn";
import { memo, PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    title?: string,
    subTitle?: string;
    clasName?: string;
    id?: string;
}

const Wrapper = ( { title, subTitle, children, clasName, id } : Props) => {
    return (
        <div className="w-full h-full flex flex-col gap-4 mb-4" id={id}>
            <div className="mt-4 flex flex-col">
                {title && <h2 className="text-text font-bold text-xl">{title}</h2>}
                {subTitle && <p className="text-muted text-sm font-light">{subTitle}</p>}
            </div>
            <div className={cn(clasName)}>{children}</div>
        </div>
    )
}
export default memo(Wrapper);