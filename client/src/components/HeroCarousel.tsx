import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import mustardOilImg from "@/assets/products/final-images/mustard-oil.png";
import cottonOilImg from "@/assets/products/final-images/cotton-seed-refined-oil.png";
import sunflowerOilImg from "@/assets/products/final-images/sunflower-oil.png";
import cottonseedCakeImg from "@/assets/products/final-images/cotton-seed-cake.png";

const slides = [
  { 
    bg: cottonseedCakeImg, 
    title: "Nutritious Cottonseed Cake", 
    subtitle: "Premium High-Protein Livestock Feed" 
  },
  { 
    bg: mustardOilImg, 
    title: "Pure Mustard Oil", 
    subtitle: "Traditionally Cold-Pressed Purity" 
  },
  { 
    bg: cottonOilImg, 
    title: "Cotton Refined Oil", 
    subtitle: "Ideal for Healthy & Light Cooking" 
  },
  { 
    bg: sunflowerOilImg, 
    title: "Heart Healthy Sunflower Oil", 
    subtitle: "Light, Neutral & Vitamin Enriched" 
  }
];

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Improved Auto-scroll logic
  React.useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Slightly faster for better engagement

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFF8E1]">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-video md:aspect-[16/9] max-w-[1920px] mx-auto">
        <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true, duration: 40 }}>
          <CarouselContent className="h-full ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-full w-full pl-0">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={slide.bg}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12 md:p-24">
                    <div className="max-w-3xl space-y-4">
                      <h2 className="text-3xl md:text-6xl font-bold text-white font-heading drop-shadow-lg">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators - Themed with Green */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 transition-all rounded-full ${
                current === i ? "w-10 bg-[#2E7D32]" : "w-3 bg-[#2E7D32]/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
