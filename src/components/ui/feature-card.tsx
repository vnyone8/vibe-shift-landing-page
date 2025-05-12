
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="backdrop-blur-xl bg-causal-blue/30 border border-causal-blue-light/40 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Enhanced glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-causal-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-causal-accent mb-4 text-3xl bg-causal-blue-dark/60 p-3 rounded-lg inline-block group-hover:bg-causal-blue-dark/80 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-causal-text bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">{title}</h3>
        <p className="text-causal-text-secondary">{description}</p>
      </div>
    </div>
  )
}
