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
    if (n.includes("transfer")) return "transfer";
    if (n.includes("flat")) return "flat";
    if (n.includes("hosiery")) return "hosiery";
    return "circular";
}

// Helper to deduce description
function deduceDescription(name: string): string {
    if (name.includes("Transfer")) return "Specialized transfer needle for complex pattern knitting.";
    if (name.includes("Flat")) return "High-precision flat knitting needle for diverse fabric textures.";
    return "Premium quality knitting needle designed for high-speed circular machines.";
}

// Automatically import all images from the assets/products directory
// Use absolute path from Vite root (client directory)
const productImages = import.meta.glob('/src/assets/products/**/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

// Generate products based on the file list
// We will look for directories or specific images to define products
export const products: Product[] = [];


// Extract unique folder names from the image paths
// Path format: /src/assets/products/FOLDER_NAME/image.ext
const folderToImagesMap: Record<string, string[]> = {};

Object.keys(productImages).forEach((path) => {
    // path is like /src/assets/products/2.5G/IMG...
    // We need to parse relative to 'products'
    const parts = path.split('/');
    const productsIndex = parts.indexOf('products');

    if (productsIndex !== -1 && parts.length > productsIndex + 2) {
        // There is a folder: .../products/FOLDER/image.ext
        const folderName = parts[productsIndex + 1];

        // Initialize array if not exists
        if (!folderToImagesMap[folderName]) {
            folderToImagesMap[folderName] = [];
        }
        // Add image to the list
        folderToImagesMap[folderName].push(productImages[path]);
    }
});

// Create products from folders
const sortedFolders = Object.keys(folderToImagesMap).sort();

sortedFolders.forEach((folder) => {
    products.push({
        id: folder.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, ""),
        name: `${folder.replace(/[()]/g, " ")} Series`, // Clean up name for display
        category: deduceCategory(folder),
        description: deduceDescription(folder),
        features: ["High Durability", "Smooth Finish", "Precision Engineered"],
        gaugeRange: folder.includes("G") ? folder.split("G")[0] + "G" : "Standard",
        material: "High Carbon Steel",
        coating: "Chrome Plated",
        application: "Industrial Knitting",
        // badge: undefined, // Badges removed
        image: folderToImagesMap[folder][0], // Keep main image as first one
        images: folderToImagesMap[folder] // Add all images
    });
});

// Explicit Transfer Needle fallback if needed, but only if not found in folders.
// User requested "start adding the images to the each product divs", suggesting folders are key.
// We'll trust the dynamic generation.
