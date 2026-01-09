import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ShoppingCart, Zap, Shield, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MpesaCheckoutDialog } from "@/components/payments/MpesaCheckoutDialog";
import { useCurrency } from "@/hooks/useCurrency";
import type { Database } from "@/integrations/supabase/types";

type Beat = Database["public"]["Tables"]["beats"]["Row"] & {
  producer?: {
    full_name: string | null;
    badge: string | null;
    country: string | null;
  } | null;
};

interface BeatCardProps {
  beat: Beat;
  isPlaying: boolean;
  onPlay: () => void;
}

const getBadgeIcon = (badge: string | null) => {
  switch (badge) {
    case "global_staff":
      return <Globe className="w-3 h-3" />;
    case "partner":
      return <Shield className="w-3 h-3" />;
    case "verified_artist":
    case "top_producer":
      return <Award className="w-3 h-3" />;
    default:
      return null;
  }
};

const getBadgeLabel = (badge: string | null) => {
  switch (badge) {
    case "global_staff":
      return "WE Global Staff";
    case "partner":
      return "Partner";
    case "verified_artist":
      return "Verified Artist";
    case "top_producer":
      return "Top Producer";
    default:
      return null;
  }
};

export const BeatCard = ({ beat, isPlaying, onPlay }: BeatCardProps) => {
  const [showLicenseDialog, setShowLicenseDialog] = useState(false);
  const [showMpesaDialog, setShowMpesaDialog] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<{ type: string; price: number } | null>(null);
  const { formatPrice } = useCurrency();
  // For sample beats (no producer), show WE Global as producer with global_staff badge
  const isSampleBeat = !beat.producer_id;
  const producerName = isSampleBeat ? "WE Global Studio" : (beat.producer?.full_name || "Unknown Producer");
  const producerBadge = isSampleBeat ? "global_staff" : beat.producer?.badge;
  const producerCountry = isSampleBeat ? "Kenya" : beat.producer?.country;
  const isPartnerOrStaff = producerBadge === "global_staff" || producerBadge === "partner";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Partner/Staff indicator */}
      {isPartnerOrStaff && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-10" />
      )}

      {/* Cover */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={beat.cover_url || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"}
          alt={beat.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        
        {/* Play Button */}
        <button
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-110 transition-transform">
            {isPlaying ? (
              <Pause className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            )}
          </div>
        </button>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {beat.bpm} BPM
          </Badge>
          {beat.key && (
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {beat.key}
            </Badge>
          )}
        </div>

        {/* Country Flag */}
        {producerCountry && (
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm text-xs">
              🇰🇪 {producerCountry}
            </Badge>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate">
              {beat.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-muted-foreground truncate">{producerName}</span>
              {producerBadge && (
                <Badge 
                  className={`text-xs flex items-center gap-1 ${
                    isPartnerOrStaff 
                      ? "bg-accent/20 text-accent border-accent/30" 
                      : "bg-primary/10 text-primary border-primary/30"
                  }`}
                >
                  {getBadgeIcon(producerBadge)}
                  {getBadgeLabel(producerBadge)}
                </Badge>
              )}
            </div>
          </div>
          <Badge className="bg-primary/10 text-primary border-0 capitalize shrink-0 ml-2">
            {beat.genre.replace("_", " ")}
          </Badge>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4" />
            <span>{(beat.play_count || 0).toLocaleString()} plays</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            {formatPrice(Number(beat.price_basic))}
          </span>
        </div>

        <Dialog open={showLicenseDialog} onOpenChange={setShowLicenseDialog}>
          <DialogTrigger asChild>
            <Button variant="hero" className="w-full mt-4">
              <ShoppingCart className="w-4 h-4 mr-2" />
              License This Beat
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Choose License</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              {[
                { type: "Basic", price: Number(beat.price_basic), features: ["MP3 file", "2,500 streams", "Non-exclusive"] },
                { type: "Premium", price: Number(beat.price_premium), features: ["WAV + MP3", "Unlimited streams", "Non-exclusive"] },
                { type: "Exclusive", price: Number(beat.price_exclusive), features: ["All stems", "Unlimited use", "Full ownership"] },
              ].map((license) => (
                <button
                  key={license.type}
                  onClick={() => {
                    setSelectedLicense(license);
                    setShowLicenseDialog(false);
                    setShowMpesaDialog(true);
                  }}
                  className="w-full p-4 rounded-xl border border-border hover:border-primary/50 transition-colors text-left"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-lg">{license.type}</span>
                    <span className="font-display font-bold text-xl text-primary">{formatPrice(license.price)}</span>
                  </div>
                  <ul className="space-y-1">
                    {license.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </DialogContent>
        </Dialog>

        {selectedLicense && (
          <MpesaCheckoutDialog
            open={showMpesaDialog}
            onOpenChange={setShowMpesaDialog}
            amount={selectedLicense.price}
            description={`${beat.title} - ${selectedLicense.type} License`}
            paymentType="beat_purchase"
            referenceId={beat.id}
            metadata={{ license_type: selectedLicense.type.toLowerCase(), beat_title: beat.title }}
            onSuccess={() => {
              setShowMpesaDialog(false);
              setSelectedLicense(null);
            }}
          />
        )}
      </div>
    </motion.div>
  );
};
