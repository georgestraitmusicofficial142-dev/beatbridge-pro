import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Headphones, Mail, MapPin, Phone, Instagram, Twitter, Youtube, Linkedin, Music2, Disc3 } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Music Production", href: "/studio" },
    { label: "Mixing & Mastering", href: "/booking" },
    { label: "Beat Licensing", href: "/beats" },
    { label: "Remote Sessions", href: "/booking" },
    { label: "Sound for Film", href: "/studio" },
  ],
  company: [
    { label: "About Us", href: "/studio" },
    { label: "Our Studio", href: "/studio" },
    { label: "Beats Store", href: "/beats" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Licensing", href: "#" },
    { label: "Support", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating Music Notes */}
      <motion.div 
        className="absolute top-20 right-20 text-primary/10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Music2 className="w-16 h-16" />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 left-20 text-accent/10"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Disc3 className="w-12 h-12" />
      </motion.div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl blur-lg opacity-50" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-foreground">
                  WE Global
                </span>
                <span className="text-sm text-muted-foreground">Music Production Studio</span>
              </div>
            </motion.div>

            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              A borderless ecosystem connecting artists, producers, labels, and brands 
              through world-class music production. Your sound, our craft.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <motion.a 
                href="mailto:studio@weglobal.com" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                studio@weglobal.com
              </motion.a>
              <motion.a 
                href="tel:+1234567890" 
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +1 (234) 567-890
              </motion.a>
              <motion.div 
                className="flex items-center gap-3 text-sm text-muted-foreground"
                whileHover={{ x: 4 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                Los Angeles • London • Nairobi
              </motion.div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <motion.li key={link.label} whileHover={{ x: 4 }}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WE Global Music Production Studio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm border border-border/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
