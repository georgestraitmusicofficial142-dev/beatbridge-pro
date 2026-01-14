import { motion } from "framer-motion";
import { FileText, Check, Music, Mic2, Video, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Licensing = () => {
  const licenses = [
    {
      name: "Basic License",
      price: "From KES 2,999",
      description: "Perfect for demos, mixtapes, and non-commercial releases",
      features: [
        { text: "MP3 file (320kbps)", included: true },
        { text: "Up to 2,500 streams", included: true },
        { text: "Non-profit performances", included: true },
        { text: "Must credit producer", included: true },
        { text: "WAV file", included: false },
        { text: "Stems/Trackouts", included: false },
        { text: "Commercial use", included: false },
        { text: "Broadcast rights", included: false },
      ],
      popular: false,
    },
    {
      name: "Premium License",
      price: "From KES 9,999",
      description: "Ideal for commercial releases and professional artists",
      features: [
        { text: "MP3 + WAV files", included: true },
        { text: "Unlimited streams", included: true },
        { text: "Commercial performances", included: true },
        { text: "Music video rights", included: true },
        { text: "Radio broadcast rights", included: true },
        { text: "Credit producer (optional)", included: true },
        { text: "Stems/Trackouts", included: false },
        { text: "Exclusive ownership", included: false },
      ],
      popular: true,
    },
    {
      name: "Exclusive License",
      price: "From KES 49,999",
      description: "Full ownership - beat removed from marketplace",
      features: [
        { text: "All file formats", included: true },
        { text: "Full stems/trackouts", included: true },
        { text: "Unlimited everything", included: true },
        { text: "Full commercial use", included: true },
        { text: "All broadcast rights", included: true },
        { text: "No credit required", included: true },
        { text: "Full ownership transfer", included: true },
        { text: "Beat removed from store", included: true },
      ],
      popular: false,
    },
  ];

  const useCases = [
    { icon: Music, title: "Music Streaming", description: "Spotify, Apple Music, YouTube Music, etc." },
    { icon: Video, title: "Music Videos", description: "YouTube, Vevo, social media content" },
    { icon: Radio, title: "Radio & Broadcast", description: "FM/AM radio, podcasts, TV sync" },
    { icon: Mic2, title: "Live Performance", description: "Concerts, tours, public events" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Beat <span className="gradient-text">Licensing</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the right license for your project. All licenses include immediate download
              and a signed licensing agreement.
            </p>
          </motion.div>

          {/* License Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {licenses.map((license, index) => (
              <motion.div
                key={license.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative p-6 rounded-2xl border ${
                  license.popular
                    ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/30"
                    : "bg-card border-border/50"
                }`}
              >
                {license.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h2 className="font-display text-2xl font-bold mb-2">{license.name}</h2>
                  <p className="text-2xl font-bold text-primary mb-2">{license.price}</p>
                  <p className="text-sm text-muted-foreground">{license.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {license.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-sm ${
                        feature.included ? "text-foreground" : "text-muted-foreground line-through"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 flex-shrink-0 ${
                          feature.included ? "text-green-500" : "text-muted"
                        }`}
                      />
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link to="/beats">
                  <Button
                    variant={license.popular ? "hero" : "outline"}
                    className="w-full"
                  >
                    Browse Beats
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Use Cases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              What Can You Do With Licensed Beats?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card border border-border/50 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I upgrade my license later?",
                  a: "Yes! Contact us and we'll credit your previous purchase toward the upgrade.",
                },
                {
                  q: "What happens after I purchase exclusive rights?",
                  a: "The beat is immediately removed from the marketplace and you receive full ownership.",
                },
                {
                  q: "Do I need to credit the producer?",
                  a: "Credit is required for Basic licenses, optional for Premium, and not required for Exclusive.",
                },
              ].map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-card border border-border/50">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licensing;
