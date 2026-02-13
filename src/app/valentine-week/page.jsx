"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";


const days = [
  {
    title: "🌹 Rose Day",
    text: "Like a rose among thorns, you stand out in every crowd. Here's a rose to remind you that you're as beautiful as you are loved.",
    gradient: "from-rose-500 via-pink-500 to-red-600",
  },
  {
    title: "💍 Propose Day",
    text: "I don't need grand gestures to know what my heart wants. It's you, today and always. Will you continue being my forever?",
    gradient: "from-pink-600 via-red-500 to-rose-700",
  },
  {
    title: "🍫 Chocolate Day",
    text: "Life with you is sweeter than any chocolate. You're my favorite indulgence, my sweetest addiction.",
    gradient: "from-amber-500 via-orange-500 to-yellow-600",
  },
  {
    title: "🧸 Teddy Day",
    text: "I wish I could hold you close every second of the day. Until then, let this teddy remind you of my warm embrace and endless love. I am ur one and only teddyyyyyyyyyyyyyyyyyyy.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    title: "💌 Promise Day",
    text: "I promise to love you in your highs and hold you through your lows. I promise to choose you, every single day, for the rest of my life.",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
  },
  {
    title: "🤗 Hug Day",
    text: "In your arms, I've found my safest place. Your hug feels like the time must stop there.",
    gradient: "from-orange-400 via-rose-400 to-pink-500",
  },
  {
    title: "💋 Kiss Day",
    text: "Every kiss with you feels like the first one all over again—magical, electric, and full of promise.My first kiss is still my fav one.",
    gradient: "from-red-500 via-pink-600 to-rose-700",
  },
  {
    title: "💘 Valentine s Day",
    text:"You're my today and all of my tomorrows. Happy Valentine's Day to the love of my life, my Wife, my everything.",
    gradient: "from-pink-700 via-rose-700 to-red-800",
  },
];

export default function ValentineWeek() {
  const containerRef = useRef(null);
  const [petals, setPetals] = useState([]);
  const [particles, setParticles] = useState([]);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  /* -------- Generate Realistic Petals -------- */
  useEffect(() => {
    const width = window.innerWidth;

    const generatedPetals = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * width,
      size: 20 + Math.random() * 40,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      blur: Math.random() > 0.5 ? "blur-sm" : "blur-none",
      rotateX: Math.random() * 360,
      rotateY: Math.random() * 360,
    }));

    const generatedParticles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      duration: 5 + Math.random() * 5,
    }));

    setPetals(generatedPetals);
    setParticles(generatedParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
     
      {/* 🌌 Parallax Background Glow */}
      <motion.div
        style={{ y: parallax }}
        className="fixed inset-0 -z-10 bg-gradient-to-br from-pink-200/20 to-rose-300/20 blur-3xl"
      />

      {/* 🌹 3D Rotating Petals */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {petals.map((petal, i) => (
          <motion.div
            key={i}
            initial={{
              y: -100,
              x: petal.x,
              rotateX: petal.rotateX,
              rotateY: petal.rotateY,
              opacity: 0,
            }}
            animate={{
              y: "110vh",
              rotateX: petal.rotateX + 360,
              rotateY: petal.rotateY + 360,
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${petal.blur}`}
            style={{
              width: petal.size,
              height: petal.size * 1.2,
              background:
                "radial-gradient(circle at 30% 30%, #ff4d6d, #c9184a)",
              borderRadius: "50% 50% 50% 0",
              transformStyle: "preserve-3d",
            }}
          />
        ))}
      </div>

      {/* ✨ Soft Glowing Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: p.x,
              top: p.y,
              boxShadow: "0 0 15px rgba(255,255,255,0.8)",
            }}
          />
        ))}
      </div>

      {/* 💘 Sections */}
      {days.map((day, index) => (
        <section
          key={index}
          className={`h-screen w-full snap-start flex items-center justify-center bg-gradient-to-br ${day.gradient} transition-opacity duration-700`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center text-white px-6 max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-2xl">
              {day.title}
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed opacity-90">
              {day.text}
            </p>
          </motion.div>
          
        {
          index == 7 && 
           <button
          className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          <Link href={"/letter"} >Continue →</Link>
        </button>
        }
        </section>
      ))}
      
    </div>
  );
}
