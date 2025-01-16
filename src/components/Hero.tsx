import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-primary/20 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Discover Your Natural Glow
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the magic of Korean skincare with our curated collection of gentle,
            effective products for all skin types.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground animate-float"
          >
            Shop Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Natural Ingredients</h3>
            <p className="text-gray-600">Carefully sourced botanicals for gentle care</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Cruelty Free</h3>
            <p className="text-gray-600">Never tested on animals, always kind to nature</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Dermatologist Tested</h3>
            <p className="text-gray-600">Safe and effective for all skin types</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;