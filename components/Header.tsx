import { Menu } from "lucide-react";
import Image from "next/image";
import { memo } from "react"

const Header = () => {
    return (
        <div className="px-6 py-6 border-b border-border/20 flex justify-between items-center">
            <Image 
                src={"./logo.svg"}
                alt="Logo"
                width={100}
                height={30}
            />

            <Menu 
                className="text-black"
            />
        </div>
    )
}
export default memo(Header);