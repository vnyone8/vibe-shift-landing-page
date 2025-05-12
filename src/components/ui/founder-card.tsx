
interface FounderCardProps {
  name: string
  role: string
  description: string
}

export function FounderCard({ name, role, description }: FounderCardProps) {
  return (
    <div className="backdrop-blur-xl bg-causal-blue/30 border border-causal-blue-light/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-causal-accent/20 via-blue-400/10 to-causal-accent/20 rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-causal-blue-light to-causal-accent flex items-center justify-center text-2xl font-bold text-causal-blue-dark mb-4">
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-causal-text">{name}</h3>
        <p className="text-causal-accent text-sm mb-3">{role}</p>
        <p className="text-causal-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}
