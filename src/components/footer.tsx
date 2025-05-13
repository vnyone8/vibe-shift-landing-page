
import { LinkedinIcon, XIcon, GithubIcon, MailIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-[#060a14] py-12 border-t border-causal-blue-light/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold text-causal-text">CAUSALITY</a>
            </div>
            <p className="text-causal-text-secondary text-sm mb-4">
              Your extended hedge fund research team powered by advanced AI capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">
                <XIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-causal-text mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">AI Stock Analyst</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Risk Factor Analysis</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Market Explanations</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Predictive Scenarios</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-causal-text mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">About</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Team</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-causal-text mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-causal-text-secondary hover:text-causal-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-causal-blue-light/30 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-causal-text-secondary text-sm mb-2 md:mb-0">© {new Date().getFullYear()} Causality AI Inc. All rights reserved.</p>
          <div className="flex items-center">
            <a href="mailto:contact@causality.ai" className="flex items-center text-causal-text-secondary hover:text-causal-accent transition-colors text-sm">
              <MailIcon className="w-4 h-4 mr-2" />
              contact@causality.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
