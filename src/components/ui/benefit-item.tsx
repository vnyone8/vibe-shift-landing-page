
import { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 mb-12">
      <div className="text-causal-accent text-2xl flex-shrink-0 mb-2 md:mb-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-causal-text">{title}</h3>
        <p className="text-causal-text-secondary">{description}</p>
      </div>
    </div>
  )
}
