import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Fruit {
  name: string;
  color: string;
  bgImage: string;
  fruitImage: string;
  backgroundColor: string;
}

const fruits: Fruit[] = [
  {
    name: "STRAWBERRY",
    color: "#FF00B7",
    bgImage:
      "https://images.pexels.com/photos/1788912/pexels-photo-1788912.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/10150447/pexels-photo-10150447.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "rgba(237, 15, 82, 0.91)", // Original strawberry color
  },
  {
    name: "ORANGE",
    color: "#FF7809",
    bgImage:
      "https://images.pexels.com/photos/793763/pexels-photo-793763.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/17840024/pexels-photo-17840024.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#FF5900",
  },
  {
    name: "MUDAPPLE",
    color: "#8A3C3C",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#592407",
  },
  {
    name: "CRANBERRY",
    color: "#EC8484",
    bgImage:
      "https://images.pexels.com/photos/9092660/pexels-photo-9092660.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/24743545/pexels-photo-24743545.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#CC3112",
  },
  {
    name: "APPLE",
    color: "#00FFBB",
    bgImage:
      "https://images.pexels.com/photos/8970749/pexels-photo-8970749.jpeg?auto=compress&cs=tinysrgb&w=400",
    fruitImage:
      "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    backgroundColor: "#00FFF2",
  },
];

interface FruitSliderProps {
  onFruitChange?: (fruit: Fruit) => void;
}

export const FruitSlider = ({ onFruitChange }: FruitSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setIsFlipping(true);
        const newIndex = (prev + 1) % fruits.length;
        if (onFruitChange) {
          setTimeout(() => onFruitChange(fruits[newIndex]), 300);
        }
        setTimeout(() => setIsFlipping(false), 800);
        return newIndex;
      });
    }, 4000);

    // Call onFruitChange immediately for the initial fruit
    if (onFruitChange) {
      onFruitChange(fruits[currentIndex]);
    }

    return () => clearInterval(interval);
  }, [isClient, onFruitChange, currentIndex]);

  const handleFruitClick = (index: number) => {
    if (index === currentIndex) return;

    setIsFlipping(true);
    setCurrentIndex(index);
    if (onFruitChange) {
      setTimeout(() => onFruitChange(fruits[index]), 300);
    }
    setTimeout(() => setIsFlipping(false), 800);
  };

  if (!isClient) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative z-10">
          <div className="relative w-48 h-72 md:w-64 md:h-96 lg:w-80 lg:h-[30rem]">
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 md:w-32 md:h-8 lg:w-40 lg:h-10 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(15, 14, 14, 0.8) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-pink-500">
              <div className="absolute top-0 left-1/4 w-6 md:w-8 h-full bg-gradient-to-r from-white/30 to-transparent rounded-l-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                    Breeze
                  </div>
                  <div className="text-xs md:text-sm opacity-80">
                    FEEL THE VIBE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-white font-roboto font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] leading-none tracking-wider opacity-90">
            STRAWBERRY
          </div>
        </div>
      </div>
    );
  }

  const currentFruit = fruits[currentIndex];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central beverage can with enhanced animations */}
      <div className="relative z-10">
        <motion.div
          animate={{
            rotateY: isFlipping ? [0, 180, 360] : 0,
            scale: isFlipping ? [1, 1.1, 1] : 1,
            y: isFlipping ? [0, -30, 0] : 0,
          }}
          transition={{
            duration: isFlipping ? 0.8 : 0,
            ease: "easeInOut",
          }}
          className="relative w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-96 lg:w-80 lg:h-[30rem] xl:w-96 xl:h-[36rem]"
        >
          {/* Enhanced can shadow with animation */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 sm:w-28 sm:h-7 md:w-32 md:h-8 lg:w-40 lg:h-10 xl:w-48 xl:h-12 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse, rgba(15, 14, 14, 0.8) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />

          {/* Can body with enhanced animations */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: 90,
                  rotateX: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: 0,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  rotateY: -90,
                  rotateX: -15,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute inset-0 rounded-2xl"
                style={{ backgroundColor: currentFruit.color }}
              >
                {/* Animated highlights */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 left-1/4 w-6 md:w-8 lg:w-10 h-full bg-gradient-to-r from-white/30 to-transparent rounded-l-2xl"
                />

                {/* Secondary animated highlight */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-0 right-1/4 w-3 md:w-4 lg:w-5 h-full bg-gradient-to-l from-white/20 to-transparent rounded-r-2xl"
                />

                {/* Brand label with enhanced animations */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-2"
                    >
                      Breeze
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-xs sm:text-sm md:text-base lg:text-lg opacity-80"
                    >
                      FEEL THE VIBE
                    </motion.div>
                  </div>
                </div>

                {/* Subtle animated inner glow */}
                <motion.div
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                />

                {/* Metallic reflection effect */}
                <motion.div
                  animate={{
                    x: [-100, 100],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1,
                  }}
                  className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Large fruit name text with enhanced animations */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{
              opacity: 0,
              y: 150,
              scale: 0.3,
              filter: "blur(20px)",
              rotateX: 90,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -150,
              scale: 0.3,
              filter: "blur(20px)",
              rotateX: -90,
            }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-white font-roboto font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-none tracking-wider text-center px-4"
            style={{
              textShadow:
                "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
              WebkitTextStroke: "1px rgba(255,255,255,0.1)",
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
                  "6px 6px 16px rgba(0,0,0,0.5), 3px 3px 6px rgba(0,0,0,0.7), 0 0 30px rgba(255,255,255,0.2)",
                  "4px 4px 12px rgba(0,0,0,0.4), 2px 2px 4px rgba(0,0,0,0.6), 0 0 20px rgba(255,255,255,0.1)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {currentFruit.name}
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced flavor indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {fruits.map((fruit, index) => (
          <motion.button
            key={index}
            onClick={() => handleFruitClick(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            style={{
              backgroundColor:
                index === currentIndex ? "white" : fruit.color + "80",
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
            animate={{
              scale: index === currentIndex ? [1, 1.2, 1] : 1,
            }}
            transition={{
              scale: {
                duration: 0.6,
                repeat: index === currentIndex ? Infinity : 0,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export { fruits };
