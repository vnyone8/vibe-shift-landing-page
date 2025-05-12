
import { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="backdrop-blur-sm bg-causal-blue/40 border border-causal-blue-light/30 rounded-xl p-6 hover:shadow-lg hover:border-causal-blue-light/50 transition-all duration-300">
      <div className="text-causal-accent text-3xl flex-shrink-0 mb-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-3 text-causal-text">{title}</h3>
        <p className="text-causal-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}
