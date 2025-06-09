
import { ExternalLink, Heart } from 'lucide-react';

const TemplatesSection = () => {
  const templates = [
    {
      name: 'E-commerce Store',
      category: 'Business',
      image: 'photo-1486312338219-ce68d2c6f44d',
      likes: 124,
      delay: '0s'
    },
    {
      name: 'Portfolio Site',
      category: 'Creative',
      image: 'photo-1649972904349-6e44c42644a7',
      likes: 89,
      delay: '0.2s'
    },
    {
      name: 'SaaS Landing',
      category: 'Tech',
      image: 'photo-1488590528505-98d2b5aba04b',
      likes: 156,
      delay: '0.4s'
    },
    {
      name: 'Restaurant Menu',
      category: 'Food & Beverage',
      image: 'photo-1518770660439-4636190af475',
      likes: 78,
      delay: '0.6s'
    },
    {
      name: 'Blog Template',
      category: 'Content',
      image: 'photo-1581091226825-a6a2a5aee158',
      likes: 92,
      delay: '0.8s'
    },
    {
      name: 'Agency Site',
      category: 'Business',
      image: 'photo-1531297484001-80022131f5a1',
      likes: 134,
      delay: '1s'
    }
  ];

  return (
    <section id="templates" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="scroll-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Template <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of professionally designed templates
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.name}
              className="scroll-fade-in group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:transform hover:scale-105 bg-card"
              style={{ animationDelay: template.delay }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${template.image}?w=800&h=600&fit=crop`}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary font-medium">
                    {template.category}
                  </span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-300">
                    <ExternalLink size={16} />
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {template.name}
                </h3>
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{template.likes} likes</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-secondary font-medium">
                      {template.category}
                    </span>
                    <h3 className="text-lg font-semibold">
                      {template.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Heart size={16} />
                    <span className="text-sm">{template.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            View All Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
