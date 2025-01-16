import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { Star, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  // Placeholder product data
  const product = {
    name: "Jasmine Rice Toner",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Experience the power of nature with our Jasmine Rice Toner. This hydrating formula combines the essence of jasmine flowers with nourishing rice extract to balance and brighten your skin.",
    ingredients: "Water, Jasmine Extract, Rice Extract, Glycerin, Niacinamide, Panthenol",
    howToUse: "After cleansing, apply toner to a cotton pad and gently sweep across face and neck. Use morning and evening.",
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square overflow-hidden rounded-lg bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-primary-foreground">{product.name}</h1>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600">(24 reviews)</span>
          </div>
          <p className="text-2xl font-bold text-primary-foreground">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <div>
            <h3 className="font-semibold mb-2">Key Ingredients</h3>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">How to Use</h3>
            <p className="text-gray-600">{product.howToUse}</p>
          </div>
          <Button size="lg" className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;