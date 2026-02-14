"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import LoveQuiz from "./LoveQuiz";

export default function Home() {
  const [step, setStep] = useState("intro");

  useEffect(() => {
    if (step === "animation") {
      const timer = setTimeout(() => {
        setStep("quiz");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
<main className="relative min-h-screen w-full flex justify-center text-center bg-gradient-to-br from-pink-400 via-red-400 to-pink-600">

      <AnimatePresence mode="wait">

        {step === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-white px-6"
          >
            <motion.h1
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Hey Mukku <br /> I made something just for you 💌
            </motion.h1>

            <motion.button
              onClick={() => setStep("animation")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-white text-pink-600 font-semibold px-8 py-4 rounded-full text-lg shadow-xl"
            >
              Click if you dare 👀
            </motion.button>
          </motion.div>
        )}

        {step === "animation" && (
          <motion.div
            key="animation"
            className="absolute inset-0 flex items-center justify-center"
          >
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: 1.5,
                  x: Math.random() * 600 - 300,
                  y: Math.random() * 600 - 300,
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                  ease: "easeOut",
                }}
                className="absolute text-4xl"
              >
                ❤️
              </motion.div>
            ))}
          </motion.div>
        )}

        {step === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <LoveQuiz />
          </motion.div>
        )}

      </AnimatePresence>
    </main>
  );
}
