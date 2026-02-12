import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4a90e2]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm hover:opacity-90",
        destructive:
          "bg-[#e74c3c] text-white shadow-sm hover:bg-[#e74c3c]/90",
        outline:
          "border border-white/30 bg-transparent text-white shadow-sm hover:bg-white/10",
        secondary:
          "bg-[#f8f9fa] text-[#1a2332] shadow-sm hover:bg-[#f8f9fa]/80",
        ghost:
          "hover:bg-[#f8f9fa] hover:text-[#1a2332]",
        link: "text-[#4a90e2] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 has-[>svg]:px-4 rounded-xl",
        sm: "h-8 px-4 gap-1.5 has-[>svg]:px-3 rounded-xl",
        lg: "h-12 px-8 has-[>svg]:px-6 rounded-xl",
        icon: "size-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
