
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface BentoItemProps {
  title: string
  description: string
  icon?: ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
  gradient?: boolean
  children?: ReactNode
}

export function BentoItem({ 
  title, 
  description, 
  icon, 
  className,
  size = "md", 
  gradient = false,
  children 
}: BentoItemProps) {
  return (
    <div 
      className={cn(
        "relative group backdrop-blur-xl bg-causal-blue/20 border border-causal-blue-light/30 rounded-xl p-6 overflow-hidden",
        size === "sm" && "col-span-1 row-span-1",
        size === "md" && "col-span-1 row-span-2 md:col-span-1",
        size === "lg" && "col-span-1 row-span-2 md:col-span-2",
        gradient && "bg-gradient-to-br from-causal-blue to-causal-blue-dark",
        "hover:shadow-[0_0_15px_rgba(29,57,129,0.3)] transition-all duration-300",
        className
      )}
    >
      {/* Subtle animated border glow */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-400/30 via-causal-accent/20 to-blue-600/30 rounded-xl opacity-0 group-hover:opacity-100 blur-[1px] transition duration-700 animate-pulse-slow"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {icon && (
          <div className="text-causal-accent text-3xl flex-shrink-0 mb-4">
            {icon}
          </div>
        )}
        <div className={children ? "mb-4" : ""}>
          <h3 className="text-xl font-semibold mb-2 text-causal-text">{title}</h3>
          <p className="text-causal-text-secondary text-sm">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

export function BentoGrid({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6", className)}>
      {children}
    </div>
  )
}
