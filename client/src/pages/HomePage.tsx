import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, CheckCircle, Factory, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import sachkhandBottleHero from "@/assets/products/sachkhand_bottle_hero.png";
import { products as allProducts } from "@/data/products";

const stats = [
  { value: "45+", label: "Years", description: "Legacy of Purity" },
  { value: "10k+", label: "Families", description: "Trusted Daily" },
  { value: "100%", label: "Pure", description: "Chemical Free" },
  { value: "#1", label: "Choice", description: "In Khanna" },
];

const landingProducts = allProducts.map(p => ({
  title: p.name,
  description: p.description,
  category: p.category === "oils" ? "Purity First" : "Nutritious Feed",
  queryCategory: p.category,
  image: p.image,
  id: p.id
}));

const values = [
  {
    icon: Zap,
    title: "Traditional Method",
    description: "We use the ancient cold-pressing (Kachi Ghani) method to extract oil, ensuring all nutrients stay intact.",
  },
  {
    icon: Users,
    title: "Trusted by Generations",
    description: "Over 45 years of experience in delivering quality that mothers trust for their families.",
  },
  {
    icon: Shield,
    title: "100% Quality",
    description: "Every drop of Sachkhand oil is guaranteed pure, manufactured to meet the highest health standards.",
  },
  {
    icon: Factory,
    title: "Farm to Kitchen",
    description: "Directly sourced from the finest mustard seeds, processed hygienically in our state-of-the-art facility.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Subtle Brand Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full text-foreground/70 text-sm" data-testid="badge-hero">
                <Award className="h-4 w-4 text-accent" />
                <span>Khanna's Most Trusted Purity Heritage</span>
              </div>

               <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight" data-testid="text-hero-title">
                The Essence of Pure{" "}
                <span className="text-primary italic relative">
                  Tradition
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/30 rounded-full blur-sm" />
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-description">
                Elevating the standards of purity in every drop. Trusted by families for over 45 years for our cold-pressed, high-quality mustard oil.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/products">
                  <Button size="lg" variant="cta" className="gap-2" data-testid="button-explore-products">
                    Explore Products
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="bg-white border-border text-foreground hover:bg-slate-50" data-testid="button-our-story">
                    Our Story
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-0.5">
                      {stat.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
                <div className="relative bg-white rounded-2xl p-3 border border-border shadow-xl">
                  <img
                    src={sachkhandBottleHero}
                    alt="Sachkhand Pure Mustard Oil"
                    className="w-full aspect-square object-cover rounded-xl shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-4">
                    <p className="font-heading font-semibold text-white">
                      Traditional Extraction
                    </p>
                    <p className="text-sm text-white/70">100% Purity Guaranteed</p>
                    <p className="text-xs text-accent mt-1 italic">
                      "Pure tradition, healthy standards"
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-xl z-20"
              >
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mb-1">Purity Score</p>
                <p className="text-xl font-bold text-white leading-none">100%</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 border border-border shadow-lg"
              >
                <CheckCircle className="h-8 w-8 text-accent mb-2" />
                <p className="text-foreground font-semibold">ISO Certified</p>
                <p className="text-xs text-muted-foreground">Quality Standards</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Our Range
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Purity in Every Drop
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Expertly extracted to deliver the health and authentic taste that your family deserves.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {landingProducts.map((product, index) => (
              <motion.div key={product.title} variants={fadeInUp}>
                <Link href={`/products?category=${product.queryCategory}`}>
                  <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg cursor-pointer overflow-hidden">
                    <CardContent className="p-0">
                      <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="w-full h-full flex items-center justify-center">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                              <Factory className="h-12 w-12 text-primary/60" />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                          {product.category}
                        </p>
                        <h3 className="font-heading text-xl font-semibold mb-3">
                          {product.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-all-products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-primary font-semibold uppercase tracking-wider text-sm mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl sm:text-4xl font-bold mb-4"
            >
              Rooted in Tradition
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Over four decades of commitment to health, honesty, and the authentic taste of Punjab.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center group">
                    <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <value.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-center lg:text-left"
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold">
                Ready to Upgrade to{" "}
                <span className="text-accent">Authentic</span> Purity?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0">
                Switch to Sachkhand today and experience the health and tradition of world-class oil production.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/contact">
                  <Button size="lg" variant="cta" className="gap-2" data-testid="button-contact-us-cta">
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/facilities">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white border-border text-foreground hover:bg-slate-50"
                    data-testid="button-view-facilities"
                  >
                    View Facilities
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[300px] sm:h-[350px] lg:h-[300px] rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-muted"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.6503205423073!2d76.22507217564969!3d30.687345574606137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910110880088143%3A0x4c9927b87939ef63!2sSACHKHAND%20MUSTARD%20OIL!5e1!3m2!1sen!2sin!4v1775569397290!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
