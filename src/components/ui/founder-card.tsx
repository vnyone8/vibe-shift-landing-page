
interface FounderCardProps {
  name: string
  role: string
  description: string
}

export function FounderCard({ name, role, description }: FounderCardProps) {
  return (
    <div className="backdrop-blur-xl bg-black/30 border border-[#00b7c2]/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Animated glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#FF5500]/20 via-[#00b7c2]/10 to-[#FF5500]/20 rounded-xl blur opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00b7c2] to-[#FF5500] flex items-center justify-center text-2xl font-bold text-black mb-4">
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-causal-text">{name}</h3>
        <p className="text-[#FF5500] text-sm mb-3">{role}</p>
        <p className="text-causal-text-secondary text-sm">{description}</p>
      </div>
    </div>
  )
}
