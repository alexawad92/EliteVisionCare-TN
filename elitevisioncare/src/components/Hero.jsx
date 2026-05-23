import Button from "../components/Button";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section id="home" className="h-screen relative">
      <img
        src="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Clear Vision Starts Here
        </h1>

        <p className="text-xl max-w-2xl mb-8">
          Personalized and comprehensive eye care for you and your family.
        </p>

        <Button>Book Appointment</Button>
      </motion.div>
    </section>
  );
}
