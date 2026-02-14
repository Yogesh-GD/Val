"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rewardsList = [
  "💋 One free kiss coupon",
  "🍿 Movie  of your choice",
  "🍰 Dessert date on me",
  "My shirt",
  "📸 Cute picture together",
  "🫂 Long Huggy",
  "🎁 Khatushyamji with me ",
];

export default function RewardCards({ count, isPerfect }) {
  const [flipped, setFlipped] = useState([]);
  const [shuffledRewards, setShuffledRewards] = useState([]);

  useEffect(() => {
    const shuffled = [...rewardsList]
      .sort(() => Math.random() - 0.5)
      .slice(0, count);

    setShuffledRewards(shuffled);
  }, [count]);

  const toggleFlip = (index) => {
    if (!flipped.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 px-4 overflow-scroll">

      {shuffledRewards.map((reward, index) => (
        <div
          key={index}
          className="w-40 h-56 perspective cursor-pointer"
          onClick={() => toggleFlip(index)}
        >
          <motion.div
            animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-full h-full bg-white text-pink-600 rounded-2xl flex items-center justify-center font-bold shadow-xl"
              style={{ backfaceVisibility: "hidden" }}
            >
              💝 Tap to Reveal
            </div>

            <div
              className="absolute w-full h-full bg-pink-500 text-white rounded-2xl flex items-center justify-center text-center px-3 shadow-xl"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              {reward}
            </div>
          </motion.div>
        </div>
      ))}

      <div
        className="w-44 h-60 perspective cursor-pointer border-2 border-yellow-300 rounded-2xl"
        onClick={() => toggleFlip("special")}
      >
        <motion.div
          animate={{ rotateY: flipped.includes("special") ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute w-full h-full bg-yellow-200 text-pink-600 rounded-2xl flex items-center justify-center font-bold shadow-xl"
            style={{ backfaceVisibility: "hidden" }}
          >
            🔒 Ultimate Reward
          </div>

          <div
            className="absolute w-full h-full rounded-2xl flex items-center justify-center text-center px-4 shadow-xl"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              background: isPerfect
                ? "linear-gradient(to bottom right, #ec4899, #f43f5e)"
                : "#444",
              color: "white",
            }}
          >
            {isPerfect ? (
              <div>
                💍 <br />
                Will you be my Valentine?
              </div>
            ) : (
              <div>
                🔒 Locked <br />
                Get all answers correct to unlock 💖
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
