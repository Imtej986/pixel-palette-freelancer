
import { Layers, Smartphone, Zap, Code, Palette, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Layers,
      title: 'Component Library',
      description: 'Access hundreds of pre-built components ready to customize',
      color: 'text-primary',
      delay: '0s'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'All templates are responsive and mobile-optimized by default',
      color: 'text-secondary',
      delay: '0.2s'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Generate complete templates in under 60 seconds',
      color: 'text-accent',
      delay: '0.4s'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Production-ready code that follows best practices',
      color: 'text-primary',
      delay: '0.6s'
    },
    {
      icon: Palette,
      title: 'Custom Themes',
      description: 'Brand-consistent designs with your colors and fonts',
      color: 'text-secondary',
      delay: '0.8s'
    },
    {
      icon: Users,
      title: 'Client Portal',
      description: 'Share templates with clients for easy collaboration',
      color: 'text-accent',
      delay: '1s'
    }
  ];

  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful <span className="gradient-text">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and deliver exceptional templates to your clients
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="scroll-fade-in group p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
