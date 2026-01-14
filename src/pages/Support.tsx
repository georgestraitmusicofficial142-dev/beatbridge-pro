import { useState } from "react";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  ChevronDown,
  Music,
  CreditCard,
  Calendar,
  User,
  Download,
  Shield
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Support = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const categories = [
    { icon: Music, label: "Beat Purchases", value: "beats" },
    { icon: CreditCard, label: "Payments & Billing", value: "payments" },
    { icon: Calendar, label: "Studio Bookings", value: "bookings" },
    { icon: User, label: "Account Issues", value: "account" },
    { icon: Download, label: "Downloads & Files", value: "downloads" },
    { icon: Shield, label: "Licensing Questions", value: "licensing" },
  ];

  const faqs = [
    {
      category: "Beats & Licensing",
      questions: [
        {
          q: "How do I download my purchased beats?",
          a: "After purchase, beats are available in your Dashboard under 'Purchased Beats'. You'll also receive a download link via email. Downloads are available for 30 days after purchase.",
        },
        {
          q: "Can I use the beat before my payment is confirmed?",
          a: "M-Pesa payments are typically confirmed within seconds. You can use the beat immediately after receiving the confirmation notification and email.",
        },
        {
          q: "What's the difference between Basic and Premium licenses?",
          a: "Basic licenses are for demos and non-commercial use (up to 2,500 streams). Premium licenses include commercial rights, higher quality files, and unlimited streaming.",
        },
      ],
    },
    {
      category: "Payments",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept M-Pesa for all transactions. Simply enter your phone number at checkout and approve the payment prompt on your phone.",
        },
        {
          q: "My M-Pesa payment failed, what should I do?",
          a: "Check your M-Pesa balance and PIN. If the issue persists, try again after a few minutes. Contact support if you were charged but didn't receive your purchase.",
        },
        {
          q: "Can I get a refund?",
          a: "Due to the digital nature of beats, purchases are final. Studio bookings can be cancelled with full refund if done 48+ hours in advance.",
        },
      ],
    },
    {
      category: "Studio Bookings",
      questions: [
        {
          q: "How do I reschedule my session?",
          a: "Contact us at least 24 hours before your session to reschedule. Same-day changes are subject to availability and may incur additional fees.",
        },
        {
          q: "What should I bring to my studio session?",
          a: "Bring your lyrics, reference tracks, and any stems you want to work with. We provide all professional equipment needed for recording.",
        },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.category || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Support ticket submitted! We'll respond within 24 hours.");
    setFormData({ name: "", email: "", category: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Support <span className="gradient-text">Center</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Need help? Browse our FAQs or contact our support team directly.
            </p>
          </motion.div>

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            <a
              href="mailto:support@weglobal.com"
              className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Email Support</p>
                <p className="text-sm text-muted-foreground">support@weglobal.com</p>
              </div>
            </a>
            <a
              href="tel:+254700000000"
              className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-semibold">Phone Support</p>
                <p className="text-sm text-muted-foreground">+254 700 000 000</p>
              </div>
            </a>
            <div className="p-4 rounded-xl bg-card border border-border/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold">Response Time</p>
                <p className="text-sm text-muted-foreground">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="font-semibold text-primary mb-3">{category.category}</h3>
                    <div className="space-y-2">
                      {category.questions.map((faq, faqIndex) => {
                        const globalIndex = catIndex * 10 + faqIndex;
                        return (
                          <div
                            key={faqIndex}
                            className="rounded-lg border border-border/50 overflow-hidden"
                          >
                            <button
                              onClick={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                              className="w-full p-4 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                            >
                              <span className="font-medium pr-4">{faq.q}</span>
                              <ChevronDown
                                className={cn(
                                  "w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform",
                                  expandedFaq === globalIndex && "rotate-180"
                                )}
                              />
                            </button>
                            {expandedFaq === globalIndex && (
                              <div className="px-4 pb-4 text-muted-foreground text-sm">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">Submit a Ticket</h2>
              <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-card border border-border/50 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select
                    value={formData.category}
                    onValueChange={(v) => setFormData({ ...formData, category: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your issue in detail..."
                    rows={5}
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Submit Ticket
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;
