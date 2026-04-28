import * as React from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Importing images
import bg1 from "@/assets/images/Generated Image December 28, 2025 - 4_12PM.png";
import bg2 from "@/assets/images/Generated Image December 28, 2025 - 4_13PM (1).png";
import bg3 from "@/assets/images/Generated Image December 28, 2025 - 4_13PM.png";
import bg4 from "@/assets/images/ChatGPT Image Dec 28, 2025, 04_21_57 PM.png";

// Product Image Overlays (Optional, but adds depth)
import mustardOil from "@/assets/products/FINAL IMAGES/MUSTARD OIL.png";
import cottonOil from "@/assets/products/FINAL IMAGES/COTTAN SEED REFINED OIL.png";
import sunflowerOil from "@/assets/products/FINAL IMAGES/SUNFLOWER OIL.png";
import cattleFeed from "@/assets/products/FINAL IMAGES/CATTLE FEED.png";

const slides = [
  {
    title: "Pure Tradition",
    subtitle: "Cold-Pressed Mustard Oil",
    description: "Traditionally extracted using the Kachi Ghani method, preserving every drop of health and authentic taste.",
    bg: bg1,
    productImg: mustardOil,
    ctaText: "Explore Purity",
    ctaLink: "/products",
    color: "from-yellow-500/20 to-yellow-900/40",
  },
  {
    title: "Light & Healthy",
    subtitle: "Refined Cotton Seed Oil",
    description: "Premium quality oil ideal for light cooking and crispy frying, keeping your family healthy and active.",
    bg: bg2,
    productImg: cottonOil,
    ctaText: "View Range",
    ctaLink: "/products",
    color: "from-red-500/20 to-red-900/40",
  },
  {
    title: "Heart Wellness",
    subtitle: "Pure Sunflower Oil",
    description: "Light, neutral, and rich in Vitamin E. The perfect partner for your daily heart-healthy meals.",
    bg: bg3,
    productImg: sunflowerOil,
    ctaText: "Heart Health",
    ctaLink: "/products",
    color: "from-orange-500/20 to-orange-900/40",
  },
  {
    title: "Optimal Nutrition",
    subtitle: "High-Protein Cattle Feed",
    description: "Scientifically formulated feed to ensure the health and high milk production of your livestock.",
    bg: bg4,
    productImg: cattleFeed,
    ctaText: "Livestock Care",
    ctaLink: "/products",
    color: "from-blue-500/20 to-blue-900/40",
  },
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (!api || !isPlaying) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api, isPlaying]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-[90vh] w-full pl-0">
              {/* Background with Zoom Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={current === index ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 6, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <img
                    src={slide.bg}
                    alt={slide.title}
                    className="h-full w-full object-cover opacity-60"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${slide.color}`} />
                </motion.div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-white max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={current === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                      >
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium tracking-wider uppercase mb-4">
                          {slide.subtitle}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-4">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Link href={slide.ctaLink}>
                            <Button size="lg" className="bg-white text-black hover:bg-white/90 gap-2">
                              {slide.ctaText}
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                          <Link href="/about">
                            <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20">
                              Our Legacy
                            </Button>
                          </Link>
                        </div>
                      </motion.div>
                    </div>

                    {/* Product Presentation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={current === index ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                      transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                      className="hidden lg:flex justify-center items-center relative"
                    >
                      <div className="relative group">
                         {/* Glowing Effect */}
                        <div className="absolute -inset-20 bg-white/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={slide.productImg}
                          alt={slide.subtitle}
                          className="relative h-[500px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] z-20"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Controls & Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white/50 hover:text-white transition-colors"
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
        
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 transition-all rounded-full ${
                current === i ? "w-8 bg-white" : "w-3 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
