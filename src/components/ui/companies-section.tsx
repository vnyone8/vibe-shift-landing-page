
import { cn } from "@/lib/utils";

interface CompaniesProps {
  className?: string;
}

export function CompaniesSection({ className }: CompaniesProps) {
  const companies = [
    { name: "UBS", color: "from-blue-400 to-blue-600" },
    { name: "MUFG", color: "from-red-400 to-red-600" },
    { name: "RPL", color: "from-green-400 to-green-600" },
    { name: "J.P. Morgan", color: "from-blue-500 to-blue-700" },
    { name: "Goldman Sachs", color: "from-blue-300 to-blue-500" },
  ];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">
        Trusted by Industry Leaders
      </h3>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
        {companies.map((company, index) => (
          <div 
            key={index}
            className="w-32 h-16 md:w-40 md:h-20 flex items-center justify-center backdrop-blur-md bg-causal-blue-dark/40 rounded-lg border border-causal-blue-light/20 hover:border-causal-blue-light/50 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-causal-blue-light/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
            <span className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${company.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
