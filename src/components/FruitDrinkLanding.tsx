import { motion } from "framer-motion";
import { Header } from "./Header";
import { FruitSlider } from "./FruitSlider";
import { FloatingFruit } from "./FloatingFruit";

export const FruitDrinkLanding = () => {
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #D5D4D4 0%, rgba(237, 15, 82, 0.91) 100%)",
        }}
      />

      {/* Header */}
      <Header />

      {/* Main content area */}
      <main className="relative z-10 flex-1 pt-8 md:pt-16 pb-16">
        {/* Fruit Slider */}
        <div className="relative h-[60vh] md:h-[70vh] lg:h-[75vh]">
          <FruitSlider />
        </div>

        {/* Floating fruit decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left strawberry */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-16 left-4 md:top-20 md:left-8 lg:top-24 lg:left-12"
            size="md"
            animationDelay={0.5}
            rotation={15}
          />

          {/* Top right strawberry */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-12 right-4 md:top-16 md:right-8 lg:top-20 lg:right-12"
            size="lg"
            animationDelay={1.0}
            rotation={-20}
          />

          {/* Left middle strawberry */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-1/2 left-2 md:left-4 lg:left-8 transform -translate-y-1/2"
            size="sm"
            animationDelay={1.5}
            rotation={45}
          />

          {/* Right middle strawberry */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-1/2 right-2 md:right-4 lg:right-8 transform -translate-y-1/2"
            size="md"
            animationDelay={2.0}
            rotation={-10}
          />

          {/* Bottom left strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="bottom-16 left-4 md:bottom-20 md:left-8 lg:bottom-24 lg:left-12"
            size="md"
            animationDelay={2.5}
            rotation={30}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="bottom-32 left-16 md:bottom-40 md:left-20 lg:bottom-48 lg:left-24"
            size="sm"
            animationDelay={3.0}
            rotation={-45}
          />

          {/* Bottom right strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="bottom-20 right-4 md:bottom-24 md:right-8 lg:bottom-28 lg:right-12"
            size="lg"
            animationDelay={3.5}
            rotation={60}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="bottom-40 right-16 md:bottom-48 md:right-20 lg:bottom-56 lg:right-24"
            size="md"
            animationDelay={4.0}
            rotation={-30}
          />

          {/* Additional small strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-1/3 left-1/4 transform -translate-x-1/2"
            size="sm"
            animationDelay={4.5}
            rotation={90}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg"
            alt="Fresh strawberry"
            className="top-2/3 right-1/4 transform translate-x-1/2"
            size="sm"
            animationDelay={5.0}
            rotation={-60}
          />
        </div>
      </main>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle light effects */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-36 md:h-36 bg-pink-300/20 rounded-full blur-xl"
        />
      </div>
    </div>
  );
};
