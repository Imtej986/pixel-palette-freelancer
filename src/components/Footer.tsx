
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Templates', 'Pricing', 'API'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'Status'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@templateforge.com', label: 'Email' }
  ];

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="scroll-fade-in">
              <h3 className="text-2xl font-bold gradient-text mb-4">TemplateForge</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Empowering freelancers with AI-powered template building tools. 
                Create stunning, professional templates in minutes.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className="scroll-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="scroll-fade-in text-muted-foreground text-sm mb-4 md:mb-0">
              © 2024 TemplateForge. All rights reserved.
            </div>
            <div className="scroll-fade-in flex items-center space-x-6 text-sm text-muted-foreground" style={{ animationDelay: '0.2s' }}>
              <span>Contact us: hello@templateforge.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
