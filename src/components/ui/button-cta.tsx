
import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'default' | 'lg'
}

const ButtonCTA = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
          variant === 'default' && "bg-causal-accent hover:bg-causal-accent-hover text-causal-blue-dark shadow",
          variant === 'secondary' && "bg-causal-blue-light hover:bg-opacity-90 text-causal-text",
          variant === 'outline' && "border border-causal-text hover:bg-causal-blue-light text-causal-text",
          size === 'default' && "h-10 px-6 py-2",
          size === 'lg' && "h-12 px-10 py-3 text-base",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
ButtonCTA.displayName = "ButtonCTA"

export { ButtonCTA }
