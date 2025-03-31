import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#4A6D7C] text-white shadow-md hover:bg-[#3A5A69] active:scale-[0.98] transition-all duration-200",
        destructive:
          "bg-red-500 text-white shadow-md hover:bg-red-600 active:scale-[0.98] transition-all duration-200",
        outline:
          "border-2 border-[#4A6D7C] bg-transparent text-[#4A6D7C] shadow-sm hover:bg-[#4A6D7C]/10 active:scale-[0.98] transition-all duration-200",
        secondary:
          "bg-[#E5E5E5] text-[#333333] shadow-sm hover:bg-[#D5D5D5] active:scale-[0.98] transition-all duration-200",
        ghost: "hover:bg-[#E5E5E5] hover:text-[#333333] active:scale-[0.98] transition-all duration-200",
        link: "text-[#4A6D7C] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
