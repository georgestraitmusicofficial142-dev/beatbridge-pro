import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Filter, Search, ShoppingCart, Music2, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AudioPlayer } from "@/components/audio/AudioPlayer";

// Sample beat data (in production, this would come from the database)
const sampleBeats = [
  {
    id: "1",
    title: "Midnight Cruise",
    producer: "DJ Shadow",
    genre: "hip_hop",
    mood: "chill",
    bpm: 90,
    key: "Am",
    price_basic: 29.99,
    price_premium: 99.99,
    price_exclusive: 499.99,
    cover_url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 1245,
  },
  {
    id: "2",
    title: "Neon Dreams",
    producer: "Wave Master",
    genre: "electronic",
    mood: "energetic",
    bpm: 128,
    key: "Fm",
    price_basic: 34.99,
    price_premium: 129.99,
    price_exclusive: 599.99,
    cover_url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 892,
  },
  {
    id: "3",
    title: "Urban Legends",
    producer: "Metro",
    genre: "trap",
    mood: "dark",
    bpm: 140,
    key: "Gm",
    price_basic: 39.99,
    price_premium: 149.99,
    price_exclusive: 699.99,
    cover_url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 2103,
  },
  {
    id: "4",
    title: "Golden Hour",
    producer: "Sunset Prod",
    genre: "rnb",
    mood: "romantic",
    bpm: 75,
    key: "Db",
    price_basic: 29.99,
    price_premium: 99.99,
    price_exclusive: 449.99,
    cover_url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 1567,
  },
  {
    id: "5",
    title: "Lagos Nights",
    producer: "Afro King",
    genre: "afrobeats",
    mood: "uplifting",
    bpm: 110,
    key: "Bb",
    price_basic: 34.99,
    price_premium: 119.99,
    price_exclusive: 549.99,
    cover_url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 1890,
  },
  {
    id: "6",
    title: "Crystal Clear",
    producer: "Ambient Soul",
    genre: "ambient",
    mood: "chill",
    bpm: 85,
    key: "C",
    price_basic: 24.99,
    price_premium: 89.99,
    price_exclusive: 399.99,
    cover_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop",
    audio_url: "",
    play_count: 678,
  },
];

const genres = [
  { value: "all", label: "All Genres" },
  { value: "hip_hop", label: "Hip-Hop" },
  { value: "rnb", label: "R&B" },
  { value: "trap", label: "Trap" },
  { value: "electronic", label: "Electronic" },
  { value: "afrobeats", label: "Afrobeats" },
  { value: "ambient", label: "Ambient" },
  { value: "pop", label: "Pop" },
];

const moods = [
  { value: "all", label: "All Moods" },
  { value: "energetic", label: "Energetic" },
  { value: "chill", label: "Chill" },
  { value: "dark", label: "Dark" },
  { value: "uplifting", label: "Uplifting" },
  { value: "romantic", label: "Romantic" },
];

interface Beat {
  id: string;
  title: string;
  producer: string;
  genre: string;
  mood: string;
  bpm: number;
  key: string;
  price_basic: number;
  price_premium: number;
  price_exclusive: number;
  cover_url: string;
  audio_url: string;
  play_count: number;
}

const BeatCard = ({ beat, isPlaying, onPlay }: { beat: Beat; isPlaying: boolean; onPlay: () => void }) => {
  const [showLicenseDialog, setShowLicenseDialog] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      {/* Cover */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={beat.cover_url}
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

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {beat.bpm} BPM
          </Badge>
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {beat.key}
          </Badge>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {beat.title}
            </h3>
            <p className="text-sm text-muted-foreground">{beat.producer}</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-0 capitalize">
            {beat.genre.replace("_", " ")}
          </Badge>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4" />
            <span>{beat.play_count.toLocaleString()} plays</span>
          </div>
          <span className="font-display font-bold text-lg text-foreground">
            ${beat.price_basic}
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
                { type: "Basic", price: beat.price_basic, features: ["MP3 file", "2,500 streams", "Non-exclusive"] },
                { type: "Premium", price: beat.price_premium, features: ["WAV + MP3", "Unlimited streams", "Non-exclusive"] },
                { type: "Exclusive", price: beat.price_exclusive, features: ["All stems", "Unlimited use", "Full ownership"] },
              ].map((license) => (
                <div
                  key={license.type}
                  className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-semibold text-lg">{license.type}</span>
                    <span className="font-display font-bold text-xl text-primary">${license.price}</span>
                  </div>
                  <ul className="space-y-1">
                    {license.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

const Beats = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [selectedMood, setSelectedMood] = useState("all");
  const [bpmRange, setBpmRange] = useState([60, 180]);
  const [playingBeatId, setPlayingBeatId] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredBeats = sampleBeats.filter((beat) => {
    const matchesSearch = beat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      beat.producer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === "all" || beat.genre === selectedGenre;
    const matchesMood = selectedMood === "all" || beat.mood === selectedMood;
    const matchesBpm = beat.bpm >= bpmRange[0] && beat.bpm <= bpmRange[1];
    return matchesSearch && matchesGenre && matchesMood && matchesBpm;
  });

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
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Beat <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Browse our catalog of exclusive beats. Find the perfect sound for your next hit.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search beats or producers..."
                className="pl-12 h-12 bg-secondary border-border"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="w-[160px] h-12 bg-secondary border-border">
                  <Music2 className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Genre" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre.value} value={genre.value}>
                      {genre.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMood} onValueChange={setSelectedMood}>
                <SelectTrigger className="w-[140px] h-12 bg-secondary border-border">
                  <SelectValue placeholder="Mood" />
                </SelectTrigger>
                <SelectContent>
                  {moods.map((mood) => (
                    <SelectItem key={mood.value} value={mood.value}>
                      {mood.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="lg"
                className="h-12"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-4 h-4 mr-2" />
                BPM
              </Button>
            </div>
          </div>

          {/* BPM Filter */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mb-8 p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">BPM Range:</span>
                <span className="text-sm text-muted-foreground">{bpmRange[0]}</span>
                <Slider
                  value={bpmRange}
                  onValueChange={setBpmRange}
                  min={60}
                  max={180}
                  step={5}
                  className="flex-1 max-w-md"
                />
                <span className="text-sm text-muted-foreground">{bpmRange[1]}</span>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            Showing {filteredBeats.length} beats
          </p>

          {/* Beats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBeats.map((beat) => (
              <BeatCard
                key={beat.id}
                beat={beat}
                isPlaying={playingBeatId === beat.id}
                onPlay={() => setPlayingBeatId(playingBeatId === beat.id ? null : beat.id)}
              />
            ))}
          </div>

          {filteredBeats.length === 0 && (
            <div className="text-center py-16">
              <Music2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">No beats found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            </div>
          )}
        </div>

        {/* Global Audio Player */}
        {playingBeatId && (
          <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-xl border-t border-border/50">
            <div className="container mx-auto">
              <AudioPlayer
                title={sampleBeats.find(b => b.id === playingBeatId)?.title || "Unknown"}
                artist={sampleBeats.find(b => b.id === playingBeatId)?.producer || "Unknown"}
                coverUrl={sampleBeats.find(b => b.id === playingBeatId)?.cover_url}
                compact
                onNext={() => {
                  const currentIndex = sampleBeats.findIndex(b => b.id === playingBeatId);
                  const nextBeat = sampleBeats[currentIndex + 1];
                  if (nextBeat) setPlayingBeatId(nextBeat.id);
                }}
                onPrevious={() => {
                  const currentIndex = sampleBeats.findIndex(b => b.id === playingBeatId);
                  const prevBeat = sampleBeats[currentIndex - 1];
                  if (prevBeat) setPlayingBeatId(prevBeat.id);
                }}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Beats;
