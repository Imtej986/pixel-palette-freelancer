
import { ArrowRight, Zap, Code, Palette } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <iframe src='https://my.spline.design/animatedbackgroundgradientforweb-ihbQCbwP5NPYO1iN6XCDQ7jt/' className='absolute' width='100%' height='100%'></iframe>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="scroll-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build
              <span className="gradient-text"> Stunning </span>
              <br />
              Templates with
              <span className="gradient-text"> AI</span>
            </h1>
          </div>

          <div className="scroll-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your freelance business with our AI-powered template builder. 
              Create professional, responsive templates in minutes, not hours.
            </p>
          </div>

          <div className="scroll-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" style={{ animationDelay: '0.4s' }}>
            <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 pulse-glow">
              Start Building <ArrowRight size={20} />
            </button>
            <button className="border border-border hover:border-accent text-foreground px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-accent/10">
              Watch Demo
            </button>
          </div>

          <div className="scroll-fade-in flex flex-wrap justify-center gap-8 text-sm text-muted-foreground" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Zap size={16} className="text-secondary" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Code size={16} className="text-accent" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300">
              <Palette size={16} className="text-primary" />
              <span>Beautiful Designs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
