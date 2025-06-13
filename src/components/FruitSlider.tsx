import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fruits = [
  {
    name: "STRAWBERRY",
    color: "#FF00B7",
    bgImage:
      "https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg",
  },
  {
    name: "ORANGE",
    color: "#FF7809",
    bgImage: "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg",
  },
  {
    name: "MUDAPPLE",
    color: "#8A3C3C",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg",
  },
  {
    name: "CRANBERRY",
    color: "#EC8484",
    bgImage:
      "https://images.pexels.com/photos/9092660/pexels-photo-9092660.jpeg",
  },
  {
    name: "APPLE",
    color: "#0FB",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg",
  },
];

export const FruitSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fruits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentFruit = fruits[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central beverage can with rotating label */}
      <div className="relative z-10">
        <div className="relative w-64 h-96 md:w-80 md:h-[30rem] lg:w-96 lg:h-[36rem]">
          {/* Can shadow */}
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 md:w-40 md:h-10 lg:w-48 lg:h-12 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(ellipse, rgba(15, 14, 14, 0.8) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />

          {/* Can body */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: currentFruit.color }}
              >
                {/* Can highlight */}
                <div className="absolute top-0 left-1/4 w-8 h-full bg-gradient-to-r from-white/30 to-transparent rounded-l-2xl" />

                {/* Brand label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                      Breeze
                    </div>
                    <div className="text-sm md:text-base opacity-80">
                      FEEL THE VIBE
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Large fruit name text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            className="text-white font-roboto font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] leading-none tracking-wider"
            style={{
              textShadow: "4px 4px 8px rgba(0,0,0,0.3)",
              WebkitTextStroke: "2px rgba(255,255,255,0.1)",
            }}
          >
            {currentFruit.name}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
