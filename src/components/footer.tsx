
import { LinkedinIcon, XIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-causal-gradient-start py-12 border-t border-causal-blue-light/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <a href="#" className="text-2xl font-bold text-causal-text">CAUSALITY</a>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">
              <XIcon className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-causal-text-secondary">Built with precision.</p>
            <p className="text-causal-text-secondary mb-2">Causality AI Inc.</p>
            <p className="text-causal-text-secondary text-sm">© {new Date().getFullYear()} Causality. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
