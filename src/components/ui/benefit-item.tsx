
import { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="backdrop-blur-xl bg-causal-blue/20 border border-causal-blue-light/40 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-300/10 to-causal-accent/10 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-causal-accent text-3xl flex-shrink-0 mb-4 bg-causal-blue-dark/40 p-3 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-causal-text bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-causal-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}
