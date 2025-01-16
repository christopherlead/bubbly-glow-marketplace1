import ProductCard from "./ProductCard";

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
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground text-center mb-12">
          Bestselling Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;