import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header className="relative z-20 w-full px-4 md:px-8 lg:px-12 pt-8 md:pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-lobster text-3xl md:text-4xl lg:text-5xl"
          >
            Fruite
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8 lg:space-x-12"
          >
            <div className="text-white font-roboto text-lg lg:text-xl font-bold bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
              Home
            </div>
            <a
              href="#shop"
              className="text-white font-roboto text-lg lg:text-xl font-bold hover:text-pink-200 transition-colors"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="text-white font-roboto text-lg lg:text-xl font-bold hover:text-pink-200 transition-colors"
            >
              Contact
            </a>
          </motion.nav>

          {/* Choose Your Favourite Drink */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center space-x-2 md:space-x-3"
          >
            <span className="text-white font-roboto text-sm md:text-lg lg:text-xl font-bold hidden lg:block">
              Choose Your Favourite Drink
            </span>
            <span className="text-white font-roboto text-sm md:text-base lg:text-lg font-bold lg:hidden">
              Choose Drink
            </span>

            {/* Glass icon */}
            <svg
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
              viewBox="0 0 30 30"
              fill="currentColor"
            >
              <path d="M11.875 3.75C9.45 3.75 7.3125 5.3 6.5375 7.6C4.2 8.05 2.5 10.1125 2.5 12.5C2.5 15.2625 4.7375 17.5 7.5 17.5V27.5H21.25V25H25C25.6875 25 26.25 24.4375 26.25 23.75V13.75C26.25 13.0625 25.6875 12.5 25 12.5H22.5V10C22.5 7.2375 20.2625 5 17.5 5H15.4C14.375 4.1875 13.1625 3.75 11.875 3.75ZM11.875 6.25C12.8625 6.25 13.7875 6.7125 14.375 7.5H17.5C18.8875 7.5 20 8.625 20 10H15C12.5 10 11.65 11.4125 10.625 13.2875C9.6 15.1625 7.5 15 7.5 15C6.1125 15 5 13.8875 5 12.5C5 11.125 6.1125 10 7.5 10H8.75V9.375C8.75 7.65 10.15 6.25 11.875 6.25ZM21.25 15H23.75V22.5H21.25V15Z" />
            </svg>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:hidden flex items-center justify-center space-x-6 mt-6"
        >
          <div className="text-white font-roboto text-base font-bold bg-gradient-to-r from-white to-pink-300 bg-clip-text text-transparent">
            Home
          </div>
          <a
            href="#shop"
            className="text-white font-roboto text-base font-bold hover:text-pink-200 transition-colors"
          >
            Shop
          </a>
          <a
            href="#contact"
            className="text-white font-roboto text-base font-bold hover:text-pink-200 transition-colors"
          >
            Contact
          </a>
        </motion.nav>
      </div>
    </header>
  );
};
