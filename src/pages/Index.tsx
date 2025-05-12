
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ButtonCTA } from "@/components/ui/button-cta";
import { FeatureCard } from "@/components/ui/feature-card";
import { BenefitItem } from "@/components/ui/benefit-item";
import { BentoGrid, BentoItem } from "@/components/ui/bento-grid";
import { FounderCard } from "@/components/ui/founder-card";
import { Check, LineChart, ShieldCheck, BarChart3, Lightbulb, ChevronRight, TrendingUp, BarChartHorizontal } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Enhanced with more dynamic gradients and effects */}
      <section className="bg-gradient-to-br from-causal-blue-dark via-causal-blue to-causal-blue-dark pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-causal-blue-light/20 blur-3xl -top-48 -right-24 animate-float"></div>
          <div className="absolute w-96 h-96 rounded-full bg-causal-accent/10 blur-3xl -bottom-48 -left-24 animate-float animation-delay-2000"></div>
          <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-causal-blue-dark/70"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 bg-gradient-to-r from-white via-causal-text to-causal-text-secondary bg-clip-text text-transparent ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            >
              Your Extended Hedge Fund Research Team
            </h1>
            <p 
              className={`text-xl text-causal-text-secondary mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            >
              Hire AI agents that reason like seasoned analysts—and scale like machines
            </p>
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <ButtonCTA size="lg" className="font-medium relative overflow-hidden group">
                <span className="relative z-10">Apply for Early Access</span>
                <span className="absolute inset-0 bg-gradient-to-r from-causal-accent to-causal-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </ButtonCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Feature Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-causal-blue-dark"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-causal-blue/40 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-causal-text to-causal-text-secondary bg-clip-text text-transparent">Powerful Analytics for Hedge Funds</h2>
            <p className="text-xl text-causal-text-secondary">Cutting-edge AI analysis that delivers clear insights</p>
          </div>
          
          <BentoGrid className="mb-12">
            <BentoItem 
              title="Causal Risk Factors" 
              description="Surface the top causal risk factors behind every stock move across macro, sentiment, and fundamentals"
              icon={<BarChart3 className="w-6 h-6" />}
              size="md"
            />
            <BentoItem 
              title="Sensitivities Analysis" 
              description="Measure sensitivities to 100+ risk factors like you monitor DV01 and greeks, but for macro and fundamentals"
              icon={<LineChart className="w-6 h-6" />}
              size="lg"
              gradient={true}
            >
              <div className="mt-auto pt-4">
                <img 
                  src="public/lovable-uploads/e1619181-e923-4492-97a1-9277fae4cb83.png" 
                  alt="Dashboard visualization" 
                  className="rounded-md w-full h-auto object-cover border border-causal-blue-light/30"
                />
              </div>
            </BentoItem>
            <BentoItem 
              title="Market Move Explanations" 
              description="Understand market movements with real logic and verifiable data"
              icon={<Lightbulb className="w-6 h-6" />}
              size="md"
            />
            <BentoItem 
              title="Data-Driven Decisions" 
              description="Make informed trading choices based on deep causal insights"
              icon={<BarChartHorizontal className="w-6 h-6" />}
              size="md"
            />
            <BentoItem 
              title="Predictive Scenarios" 
              description="Build what-if scenarios based on causal relationships instead of historical correlations"
              icon={<TrendingUp className="w-6 h-6" />}
              size="md"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Stock Analyst Section - Enhanced with glass morphism */}
      <section id="features" className="py-20 md:py-32 border-y border-causal-blue-light/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-causal-blue-dark to-causal-blue"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">AI Stock Analyst</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 group">
                  <span className="text-causal-accent mt-1 bg-causal-blue-dark/60 p-1 rounded-full group-hover:bg-causal-accent/20 transition-all duration-300">
                    <Check className="w-5 h-5" />
                  </span>
                  <p className="text-causal-text-secondary">Surfaces the top causal risk factors behind every stock move across macro, sentiment, and fundamentals</p>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-causal-accent mt-1 bg-causal-blue-dark/60 p-1 rounded-full group-hover:bg-causal-accent/20 transition-all duration-300">
                    <Check className="w-5 h-5" />
                  </span>
                  <p className="text-causal-text-secondary">Measures sensitivities to 100+ risk factors in the same way you monitor DV01, gamma, and greeks, but for macro and fundamentals</p>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-causal-accent mt-1 bg-causal-blue-dark/60 p-1 rounded-full group-hover:bg-causal-accent/20 transition-all duration-300">
                    <Check className="w-5 h-5" />
                  </span>
                  <p className="text-causal-text-secondary">Explains market moves with real logic and data you can investigate</p>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 backdrop-blur-xl bg-causal-blue/30 p-4 rounded-lg shadow-xl border border-causal-blue-light/40 group hover:shadow-[0_0_25px_rgba(29,57,129,0.4)] transition-all duration-500">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/30 to-causal-accent/30 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              <img 
                src="public/lovable-uploads/e1619181-e923-4492-97a1-9277fae4cb83.png" 
                alt="Stock analysis dashboard" 
                className="rounded-md w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Advances Section - Enhanced with glass morphism */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-causal-blue to-causal-blue-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">Using the Latest AI Advances for Stock Analysis</h2>
            <p className="text-xl text-causal-text-secondary">We've trained a range of AI Agents to think and act like professional equity analysts. They can:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>}
              title="Get trade signals backed by deep causal insights"
              description="Beyond what human analysts can detect"
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
              </svg>}
              title="Backtest with causality, not correlation"
              description="Ensuring higher predictive accuracy"
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>}
              title="Find the best risk/reward trades"
              description="Within your investment thesis"
            />
            <FeatureCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>}
              title="Detect structural shifts in markets"
              description="Adjust hedges before correlations break down"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with glass morphism */}
      <section id="benefits" className="py-20 md:py-32 relative border-y border-causal-blue-light/30">
        <div className="absolute inset-0 bg-gradient-to-b from-causal-blue-dark via-causal-blue to-causal-blue-dark"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">The Edges You'll Gain</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>}
                title="Faster, Deeper Research" 
                description="Pinpoint causal drivers behind stock movements—across macro, sentiment, and fundamentals"
              />
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>}
                title="Causal P&L Attribution" 
                description="Break down returns by the macro, sentiment, and micro factors that actually moved them"
              />
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
                title="More Predictive Scenarios" 
                description="Build what-if scenarios and stress tests based on causal inputs instead of historical simulations"
              />
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
                title="Smarter Hedging" 
                description="Design protection based on real economic links—not fragile correlations"
              />
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>}
                title="Clearer Investment Narratives" 
                description="Generate attribution that tells a credible, data-backed story for any performance outcome"
              />
              <BenefitItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>}
                title="Trade Strategy Reviews" 
                description="Test investment ideas to assess their exposure and risk/reward ratios holistically"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - New section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-causal-blue to-causal-blue-dark"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-causal-blue-light/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">Meet Our Founders</h2>
            <p className="text-xl text-causal-text-secondary">The expert team behind Causality AI</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FounderCard
              name="Michael Chen"
              role="CEO & Quantitative Researcher"
              description="Former quantitative researcher at UBS with 10+ years experience in algorithmic trading strategies and causal discovery methods."
            />
            <FounderCard
              name="Sarah Johnson"
              role="CTO & AI Engineer"
              description="AI specialist from MUFG with expertise in machine learning models for financial time series and sentiment analysis."
            />
            <FounderCard
              name="David Rodriguez"
              role="COO & Finance Strategist"
              description="Previously at RPL where he led a team developing novel approaches to risk attribution and portfolio construction."
            />
          </div>
        </div>
      </section>

      {/* Built For Section - Enhanced with glass morphism */}
      <section id="about" className="py-20 md:py-32 relative border-t border-causal-blue-light/30">
        <div className="absolute inset-0 bg-gradient-to-b from-causal-blue-dark to-causal-blue"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">Built For Hedge Funds, by ex Quants</h2>
            <p className="text-xl text-causal-text-secondary mb-16">Our team has worked amongst the big names</p>
            
            <div className="flex flex-wrap justify-center items-center gap-12 mb-20">
              <div className="w-32 h-16 flex items-center justify-center backdrop-blur-md bg-causal-blue-dark/40 rounded-lg border border-causal-blue-light/20 hover:border-causal-blue-light/50 transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">UBS</span>
              </div>
              <div className="w-32 h-16 flex items-center justify-center backdrop-blur-md bg-causal-blue-dark/40 rounded-lg border border-causal-blue-light/20 hover:border-causal-blue-light/50 transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">MUFG</span>
              </div>
              <div className="w-32 h-16 flex items-center justify-center backdrop-blur-md bg-causal-blue-dark/40 rounded-lg border border-causal-blue-light/20 hover:border-causal-blue-light/50 transition-all duration-300">
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-causal-text-secondary bg-clip-text text-transparent">RPL</span>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-causal-accent to-causal-text bg-clip-text text-transparent">Gain The Edge</h3>
            <p className="text-xl text-causal-text-secondary mb-10">We're granting early access to selected hedge funds and equity investors</p>
            
            <ButtonCTA size="lg" className="font-medium relative overflow-hidden group">
              <span className="relative z-10">Apply for Early Access</span>
              <span className="absolute inset-0 bg-gradient-to-r from-causal-accent to-causal-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </ButtonCTA>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
