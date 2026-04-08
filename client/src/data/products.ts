/// <reference types="vite/client" />
export interface ProductTheme {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    surface: string;
    textPrimary?: string;
    textSecondary?: string;
}

export interface Product {
    id: string;
    name: string;
    category: string;
    description: string;
    features: string[];
    gaugeRange: string;
    material: string;
    coating: string;
    application: string;
    badge?: string;
    image: string;
    images?: string[];
    theme?: ProductTheme;
}

// Helper to deduce category from name
function deduceCategory(name: string): string {
    const n = name.toLowerCase();
    if (n.includes("kachi") || n.includes("ghani") || n.includes("cold")) return "kachi-ghani";
    if (n.includes("hair") || n.includes("care")) return "hair-care";
    return "cooking-oil";
}

// Helper to deduce description
function deduceDescription(name: string): string {
    if (name.includes("Kachi") || name.includes("Ghani")) return "Traditionally cold-pressed mustard oil, high in natural antioxidants and sharp flavor.";
    if (name.includes("Hair")) return "Nutrient-rich mustard oil perfect for deep conditioning and scalp health.";
    return "100% pure mustard oil, ideal for daily Indian cooking and immunity boosting.";
}

// Automatically import all images from the assets/products directory
// Use absolute path from Vite root (client directory)
import mustardOilImg from "@/assets/products/FINAL IMAGES/MUSTARD OIL.png";
import cottonOilImg from "@/assets/products/FINAL IMAGES/COTTAN SEED REFINED OIL.png";
import sunflowerOilImg from "@/assets/products/FINAL IMAGES/SUNFLOWER OIL.png";
import cottonseedCakeImg from "@/assets/products/FINAL IMAGES/COTTAN SEED CAKE.png";
import cattleFeedImg from "@/assets/products/FINAL IMAGES/CATTLE FEED.png";

// Hardcoded Sachkhand Products
export const products: Product[] = [
    {
        id: "mustard-oil",
        name: "Mustard Oil",
        category: "oils",
        description: "Traditionally cold-pressed mustard oil with matches purity and health standards.",
        features: ["100% Pure", "Cold Pressed", "No Chemicals", "Sharp Aroma"],
        gaugeRange: "500ml, 1L, 2L, 5L",
        material: "Prime Mustard Seeds",
        coating: "None (Pure Oil)",
        application: "Cooking & Preservation",
        image: mustardOilImg,
        badge: "Pure",
        theme: {
            primary: "48 100% 45%",       // Mustard Yellow #E6B800
            secondary: "123 46% 34%",     // Natural Green #2E7D32
            accent: "42 100% 50%",        // Golden Accent #FFB300
            bg: "46 100% 94%",            // Light Cream BG #FFF8E1
            surface: "0 0% 100%",
            textPrimary: "0 0% 18%",      // Dark Text #2F2F2F
            textSecondary: "0 0% 46%"     // Soft Gray #757575
        }
    },
    {
        id: "cotton-refined-oil",
        name: "Cotton Refined Oil",
        category: "oils",
        description: "High-quality refined cotton oil, ideal for light cooking and crispy frying.",
        features: ["Light & Neutral", "High Smoke Point", "Healthy Frying", "Vitamin Fortified"],
        gaugeRange: "1L, 2L, 5L, 15L",
        material: "Refined Cottonseeds",
        coating: "Filtered",
        application: "Deep Frying & Frying",
        image: cottonOilImg,
        theme: {
            primary: "0 66% 47%",         // Primary Red #C62828
            secondary: "218 69% 38%",     // Royal Blue #1E4FA3
            accent: "45 89% 57%",         // Bright Yellow #F4C430
            bg: "0 100% 98%",             // Soft White BG #FFF5F5
            surface: "0 0% 100%",
            textPrimary: "0 0% 12%",      // Dark Text #1F1F1F
            textSecondary: "0 0% 40%"     // Neutral Gray #666666
        }
    },
    {
        id: "sunflower-oil",
        name: "Sunflower Oil",
        category: "oils",
        description: "Light and healthy sunflower oil, perfect for everyday cooking and keeping your heart healthy.",
        features: ["Heart Healthy", "Light & Neutral", "Zero Cholesterol", "Rich in Vitamin E"],
        gaugeRange: "1L, 2L, 5L",
        material: "Sunflower Seeds",
        coating: "Refined",
        application: "Daily Cooking & Frying",
        image: sunflowerOilImg,
        theme: {
            primary: "45 100% 50%",       // Bright Yellow
            secondary: "35 100% 45%",     // Sunflower Orange
            accent: "55 100% 60%",        // Light Accent
            bg: "45 100% 98%",            // Very Light Sunflower
            surface: "0 0% 100%",
            textPrimary: "0 0% 15%",      // Darkened Text
            textSecondary: "0 0% 40%"     // Muted Text
        }
    },
    {
        id: "cottonseed-cake",
        name: "Cottonseed Cake",
        category: "cattle-feed",
        description: "Nutritious cottonseed cake, a high-protein supplement for livestock health.",
        features: ["High Protein", "Energy Rich", "Natural Fiber", "Livestock Growth"],
        gaugeRange: "25kg, 50kg Bags",
        material: "Residual Cottonseeds",
        coating: "Pressed Cake",
        application: "Animal Nutrition",
        image: cottonseedCakeImg,
        theme: {
            primary: "218 69% 38%",       // Primary Blue #1E4FA3
            secondary: "0 66% 47%",       // Strong Red #C62828
            accent: "45 89% 57%",         // Accent Yellow #F4C430
            bg: "216 33% 97%",            // Light Background #F5F7FA
            surface: "0 0% 100%",
            textPrimary: "0 0% 10%",      // Dark Text #1A1A1A
            textSecondary: "220 9% 46%"    // Neutral Gray #6B7280
        }
    },
    {
        id: "cattle-feed",
        name: "Cattle Feed",
        category: "cattle-feed",
        description: "Premium balanced cattle feed for optimal health and milk production.",
        features: ["Balanced Diet", "Mineral Fortified", "Milk Yield Plus", "Healthy Choice"],
        gaugeRange: "50kg Bags",
        material: "Multigrain Mix",
        coating: "Pelletized",
        application: "Daily Cattle Nutrition",
        image: cattleFeedImg,
        theme: {
            primary: "218 69% 38%",       // Primary Blue #1E4FA3
            secondary: "0 66% 47%",       // Strong Red #C62828
            accent: "45 89% 57%",         // Accent Yellow #F4C430
            bg: "216 33% 97%",            // Light Background #F5F7FA
            surface: "0 0% 100%",
            textPrimary: "0 0% 10%",      // Dark Text #1A1A1A
            textSecondary: "220 9% 46%"    // Neutral Gray #6B7280
        }
    }
];

// Explicit Transfer Needle fallback if needed, but only if not found in folders.
// User requested "start adding the images to the each product divs", suggesting folders are key.
// We'll trust the dynamic generation.
