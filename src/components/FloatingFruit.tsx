import { motion } from "framer-motion";

interface FloatingFruitProps {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  animationDelay?: number;
  rotation?: number;
}

const sizeClasses = {
  sm: "w-12 h-12 md:w-16 md:h-16",
  md: "w-16 h-16 md:w-24 md:h-24",
  lg: "w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40",
};

export const FloatingFruit = ({
  src,
  alt,
  className = "",
  size = "md",
  animationDelay = 0,
  rotation = 0,
}: FloatingFruitProps) => {
  return (
    <motion.div
      className={`absolute ${sizeClasses[size]} ${className}`}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: rotation,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        rotate: [rotation, rotation + 5, rotation],
      }}
      transition={{
        opacity: { duration: 0.8, delay: animationDelay },
        scale: { duration: 0.8, delay: animationDelay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animationDelay,
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: animationDelay,
        },
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-full drop-shadow-lg"
        style={{
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.3))",
        }}
      />
    </motion.div>
  );
};
