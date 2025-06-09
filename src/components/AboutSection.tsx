
import { Users, Award, Zap, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Clients', color: 'text-primary' },
    { icon: Award, value: '50K+', label: 'Templates Created', color: 'text-secondary' },
    { icon: Zap, value: '99.9%', label: 'Uptime', color: 'text-accent' },
    { icon: Globe, value: '120+', label: 'Countries', color: 'text-primary' }
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering <span className="gradient-text">Freelancers</span> Worldwide
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe every freelancer deserves access to professional-grade tools. 
              Our platform democratizes web design, making it possible for anyone to 
              create stunning, responsive templates that wow clients and drive results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Built by freelancers, for freelancers. We understand the challenges you face 
              and have crafted every feature to help you work smarter, not harder.
            </p>
            <button className="bg-gradient-to-r from-primary via-secondary to-accent hover:scale-105 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 glow-effect">
              Learn More About Us
            </button>
          </div>

          <div className="scroll-fade-in grid grid-cols-2 gap-8" style={{ animationDelay: '0.3s' }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 bg-card/30 backdrop-blur-sm"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className={`${stat.color} mx-auto mb-4 hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={40} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
