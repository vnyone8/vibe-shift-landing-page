
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-causal-blue p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-causal-blue-light">
      <div className="text-causal-accent mb-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-causal-text">{title}</h3>
      <p className="text-causal-text-secondary">{description}</p>
    </div>
  )
}
