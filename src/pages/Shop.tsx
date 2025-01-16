import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Jasmine Rice Toner",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Hydrating toner with jasmine extract",
  },
  {
    name: "Acne Patch",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
    description: "Invisible patches for overnight treatment",
  },
  {
    name: "Anti-Aging Cream",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Rich moisturizer with anti-aging benefits",
  },
  {
    name: "Vitamin C Serum",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1556229174-5e42a09e45c3",
    description: "Brightening serum with antioxidants",
  },
  {
    name: "Gentle Cleanser",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
    description: "Mild facial cleanser for all skin types",
  },
  {
    name: "Hydrating Mask",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    description: "Intensive hydrating overnight mask",
  },
];

const Shop = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold text-primary-foreground mb-8">Shop All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;