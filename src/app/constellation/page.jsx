"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ConstellationLove() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const bgStars = Array.from({ length: 150 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 4,
    }));

    setStars(bgStars);

    const curved = Array.from({ length: 3 }).map(() => ({
      delay: Math.random() * 6,
      duration: 3 + Math.random() * 2,
    }));

    setShootingStars(curved);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-black opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,0,150,0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(0,150,255,0.3),transparent_60%)] blur-3xl" />

      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {shootingStars.map((s, i) => (
          <motion.path
            key={i}
            d="M -100 100 Q 400 0 900 300"
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            style={{
              filter: "drop-shadow(0 0 6px white)",
            }}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              delay: s.delay,
              duration: s.duration,
              repeat: Infinity,
              repeatDelay: 5,
            }}
          />
        ))}
      </svg>

      <svg viewBox="0 0 800 500" className="w-[90%] max-w-4xl z-10">

        {[ 
          [120, 350],
          [180, 150],
          [240, 300],
          [300, 150],
          [360, 350],
        ].map(([x, y], i) => (
          <motion.circle
            key={"m" + i}
            cx={x}
            cy={y}
            r="4"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.3 }}
          />
        ))}

        <motion.polyline
          points="120,350 180,150 240,300 300,150 360,350"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {[
          [500, 150], 
          [600, 150], 
          [550, 250],  
          [550, 350], 
        ].map(([x, y], i) => (
          <motion.circle
            key={"y" + i}
            cx={x}
            cy={y}
            r="4"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5 + i * 0.3 }}
          />
        ))}

        <motion.polyline
          points="500,150 550,250 600,150"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        <motion.line
          x1="550"
          y1="250"
          x2="550"
          y2="350"
          stroke="white"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />

      </svg>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
        className="absolute bottom-16 text-white text-4xl md:text-6xl font-light tracking-widest"
        style={{
          textShadow: "0 0 15px #fff, 0 0 40px #ff66cc",
        }}
      >
        M ✨ Y
      </motion.div>
    </div>
  );
}
