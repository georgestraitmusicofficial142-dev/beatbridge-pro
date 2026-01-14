import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Database, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number) when you create an account or make a purchase",
        "Payment information processed securely through M-Pesa and other payment providers",
        "Usage data including beats played, search queries, and browsing patterns",
        "Device information and IP addresses for security and analytics purposes",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our music production services and beat marketplace",
        "To process transactions and send related information including purchase confirmations",
        "To send promotional communications (with your consent) about new beats and studio offers",
        "To respond to your comments, questions, and provide customer service",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard encryption for all data transmissions",
        "Payment information is processed through secure, PCI-compliant payment processors",
        "Regular security audits and vulnerability assessments are conducted",
        "Access to personal data is restricted to authorized personnel only",
      ],
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: [
        "Access and receive a copy of your personal data",
        "Request correction of inaccurate personal data",
        "Request deletion of your personal data (subject to legal requirements)",
        "Opt-out of marketing communications at any time",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 2026
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border/50 mb-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              At WE Global Music Production Studio, we are committed to protecting your privacy 
              and ensuring the security of your personal information. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our 
              website and use our services, including our beat marketplace and studio booking system.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2) }}
                className="p-6 rounded-xl bg-card border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="font-display font-semibold">Questions About Privacy?</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us at{" "}
              <a href="mailto:privacy@weglobal.com" className="text-primary hover:underline">
                privacy@weglobal.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
