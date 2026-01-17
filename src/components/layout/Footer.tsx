import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Headphones, Instagram, Twitter, Youtube, Linkedin, Music } from "lucide-react";

const quickLinks = [
  { label: "Beats", href: "/beats" },
  { label: "Studio", href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Licensing", href: "/licensing" },
  { label: "Support", href: "/support" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-card/50 backdrop-blur-sm border-t border-border/30">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Headphones className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-foreground">WE Global</span>
              <p className="text-xs text-muted-foreground">Music Production Studio</p>
            </div>
          </div>

          {/* Quick Links - Horizontal on desktop, wrap on mobile */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-border/30"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-border/30" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            © {new Date().getFullYear()} WE Global Studio. All rights reserved.
          </p>

          {/* Legal Links */}
          <nav className="flex items-center gap-4 order-1 sm:order-2">
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center gap-4">
                <Link
                  to={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-border hidden sm:block" />
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
