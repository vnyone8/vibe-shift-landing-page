
import { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="backdrop-blur-xl bg-black/20 border border-[#FF5500]/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden animate-border-glow">
      {/* Enhanced cyan/orange glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00b7c2]/30 to-[#FF5500]/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-[#FF5500] text-3xl flex-shrink-0 mb-4 bg-black/40 p-3 rounded-lg inline-block group-hover:bg-black/60 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-causal-text bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-causal-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}
