
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };
  
  return (
    <div className="backdrop-blur-xl bg-causal-blue/20 border border-causal-accent/40 rounded-xl p-8 group relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-causal-accent/20 to-blue-400/30 rounded-xl blur opacity-40 group-hover:opacity-70 transition duration-500"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">Get in Touch</h3>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-causal-blue/50 border border-causal-accent mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-causal-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl text-causal-text mb-2">Thank You!</h4>
            <p className="text-causal-text-secondary">Your message has been sent. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-causal-text-secondary mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-causal-blue-dark/60 border-causal-blue-light/30 focus:border-causal-accent/50 text-causal-text"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-causal-text-secondary mb-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-causal-blue-dark/60 border-causal-blue-light/30 focus:border-causal-accent/50 text-causal-text"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-causal-text-secondary mb-1">Company (Optional)</label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-causal-blue-dark/60 border-causal-blue-light/30 focus:border-causal-accent/50 text-causal-text"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-causal-text-secondary mb-1">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-causal-blue-dark/60 border-causal-blue-light/30 focus:border-causal-accent/50 text-causal-text min-h-[120px]"
                placeholder="How can we help your fund?"
              />
            </div>
            
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-causal-blue-light to-blue-600 hover:from-causal-blue hover:to-blue-700 text-white font-medium relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-causal-accent/70 to-blue-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
