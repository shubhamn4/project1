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

      {/* Additional background elements for depth */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-400/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-600/30 to-transparent" />
      </div>

      {/* Header */}
      <Header />

      {/* Main content area */}
      <main className="relative z-10 flex-1 pt-4 md:pt-8 lg:pt-16 pb-16">
        {/* Fruit Slider */}
        <div className="relative h-[70vh] md:h-[75vh] lg:h-[80vh]">
          <FruitSlider />
        </div>

        {/* Floating fruit decorations - optimized for mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Fresh strawberry"
            className="top-20 left-2 md:top-24 md:left-8 lg:top-28 lg:left-12"
            size="sm"
            animationDelay={0.5}
            rotation={15}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="Fresh strawberry"
            className="top-16 right-2 md:top-20 md:right-8 lg:top-24 lg:right-12"
            size="md"
            animationDelay={1.0}
            rotation={-20}
          />

          {/* Side strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Fresh strawberry"
            className="top-1/2 left-1 md:left-4 lg:left-8 transform -translate-y-1/2"
            size="sm"
            animationDelay={1.5}
            rotation={45}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Fresh strawberry"
            className="top-1/2 right-1 md:right-4 lg:right-8 transform -translate-y-1/2"
            size="sm"
            animationDelay={2.0}
            rotation={-10}
          />

          {/* Bottom strawberries */}
          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Fresh strawberry"
            className="bottom-20 left-2 md:bottom-24 md:left-8 lg:bottom-28 lg:left-12"
            size="sm"
            animationDelay={2.5}
            rotation={30}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=150"
            alt="Fresh strawberry"
            className="bottom-32 left-12 md:bottom-40 md:left-20 lg:bottom-48 lg:left-24"
            size="sm"
            animationDelay={3.0}
            rotation={-45}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=250"
            alt="Fresh strawberry"
            className="bottom-24 right-2 md:bottom-28 md:right-8 lg:bottom-32 lg:right-12"
            size="md"
            animationDelay={3.5}
            rotation={60}
          />

          <FloatingFruit
            src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Fresh strawberry"
            className="bottom-40 right-12 md:bottom-48 md:right-20 lg:bottom-56 lg:right-24"
            size="sm"
            animationDelay={4.0}
            rotation={-30}
          />

          {/* Additional decorative strawberries - hidden on very small screens */}
          <div className="hidden sm:block">
            <FloatingFruit
              src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Fresh strawberry"
              className="top-1/3 left-1/4 transform -translate-x-1/2"
              size="sm"
              animationDelay={4.5}
              rotation={90}
            />

            <FloatingFruit
              src="https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Fresh strawberry"
              className="top-2/3 right-1/4 transform translate-x-1/2"
              size="sm"
              animationDelay={5.0}
              rotation={-60}
            />
          </div>
        </div>
      </main>

      {/* Subtle light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-white/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-16 h-16 md:w-24 md:h-24 lg:w-36 lg:h-36 bg-pink-300/20 rounded-full blur-xl"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 right-1/2 w-20 h-20 md:w-28 md:h-28 bg-red-400/15 rounded-full blur-2xl"
        />
      </div>
    </div>
  );
};
