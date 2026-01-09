import { cn } from "@/utils/cn"
import { memo, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger"
    size?: "sm" | "md" | "lg"
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className,
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

    const variants = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
        danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
    }

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
    }

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                disabled && "opacity-50 cursor-not-allowed",
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default memo(Button)
