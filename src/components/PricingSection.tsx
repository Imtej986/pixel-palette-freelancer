
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers just getting started',
      features: [
        '10 templates per month',
        'Basic components library',
        'Email support',
        'Mobile responsive designs',
        'Basic customization'
      ],
      popular: false,
      color: 'border-border',
      buttonClass: 'bg-card hover:bg-muted text-foreground border border-border'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing agencies and established freelancers',
      features: [
        'Unlimited templates',
        'Premium components library',
        'Priority support',
        'Advanced customization',
        'Client collaboration tools',
        'White-label options',
        'API access'
      ],
      popular: true,
      color: 'border-primary',
      buttonClass: 'bg-primary hover:bg-primary/80 text-primary-foreground pulse-glow'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large teams and enterprise clients',
      features: [
        'Everything in Professional',
        'Custom component development',
        'Dedicated account manager',
        'On-premise deployment',
        'Advanced analytics',
        'Team management',
        'SLA guarantee'
      ],
      popular: false,
      color: 'border-border',
      buttonClass: 'bg-accent hover:bg-accent/80 text-accent-foreground'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`scroll-fade-in relative p-8 rounded-2xl border-2 ${plan.color} transition-all duration-300 hover:transform hover:scale-105 bg-card/50 backdrop-blur-sm ${
                plan.popular ? 'ring-2 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${plan.buttonClass}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
