/// <reference types="vite/client" />
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
import mustardOilImg from "@/assets/images/mustard oil.png";
import cottonOilImg from "@/assets/images/cotton refined oil.png";
import yellowMustardImg from "@/assets/images/yellow mustard.png";
import cottonseedCakeImg from "@/assets/images/cottanseed cake.png";
import mustardCakeImg from "@/assets/images/mustard oil.png"; // Fallback if specific cake image is missing
import cattleFeedImg from "@/assets/images/cattle feed.png";

// Hardcoded Sachkhand Mustard Oil Products
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
    },
    {
        id: "yellow-mustard-oil",
        name: "Yellow Mustard Oil",
        category: "oils",
        description: "Mild and healthy yellow mustard oil, perfect for daily cooking and heart health.",
        features: ["Heart Healthy", "Low Absorption", "Zero Cholesterol", "Rich in Omega-3"],
        gaugeRange: "1L, 2L, 5L",
        material: "Yellow Mustard Seeds",
        coating: "None (Pure Oil)",
        application: "Daily Sautéing & Salads",
        image: yellowMustardImg,
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
    },
    {
        id: "mustard-cake",
        name: "Mustard Cake",
        category: "cattle-feed",
        description: "Pure mustard cake, excellent for organic farming and high-quality cattle feed.",
        features: ["Organic Fertilizer", "Rich in Nutrients", "High Protein", "Natural Alternative"],
        gaugeRange: "25kg, 50kg Bags",
        material: "Mustard Seed Residue",
        coating: "Traditional Press",
        application: "Farming & Animal Feed",
        image: mustardCakeImg,
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
    }
];

// Explicit Transfer Needle fallback if needed, but only if not found in folders.
// User requested "start adding the images to the each product divs", suggesting folders are key.
// We'll trust the dynamic generation.
