
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/lovable-uploads/bd539eae-50dc-4a65-b043-8db963b976a9.png" 
                alt="TemplateForge" 
                className="h-8 w-auto"
              />
              <h1 className="text-2xl font-bold gradient-text ml-3">TemplateForge</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium relative group"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
                <button className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 pulse-glow">
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground hover:text-primary transition-colors duration-300 p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Slides down from top */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-card/95 backdrop-blur-lg border-t border-border p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted text-lg font-medium border-l-4 border-transparent hover:border-primary"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="bg-primary hover:bg-primary/80 text-primary-foreground py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 mt-4 pulse-glow"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navigation;
