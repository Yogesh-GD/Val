"use client";
import RewardCards from "./RewardCards";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const getReward = (score, total) => {
  const percentage = (score / total) * 100;

  if (percentage === 100) return "perfect";
  if (percentage >= 60) return "good";
  return "funny";
};

export default function LoveQuiz() {
  const questions = [
    {
      question: "Who fell first? 😌",
      options: ["You", "Me", "Both"],
      correct: 0,
    },
    {
      question: "On which hand side is my birthmark? 😂",
      options: ["left", "right", "idk"],
      correct: 0,
    },
    {
      question: "what is my fav color? ",
      options: ["white", "purple", "black"],
      correct: 0,
    },{
      question: "what was my fav color? ",
      options: ["purple", "Lavender", "black"],
      correct: 0,
    },
     {
      question: "who talks more ?",
      options: ["me", "you", "us"],
      correct: 0,
    },
    {
      question: "who listen more ?",
      options: ["me", "you", "us"],
      correct: 1,
    },
    {
      question: "who forgets things the most ?",
      options: ["me", "you", "us"],
      correct: 1,
    },
    {
      question: "who is more pretty ?",
      options: ["me", "you", "us"],
      correct: 0,
    },{
      question: "who is dangerous ?",
      options: ["me", "you", "us"],
      correct: 0,
    }, {
      question: "who is more sexy ?",
      options: ["me", "you", "us"],
      correct: 0,
    }, {
      question: "who  sleeps more ?",
      options: ["me", "you", "us"],
      correct: 0,
    },{
      question: "The date we had our first kiss ?",
      options: ["14 june", "16 huly", "17 june"],
      correct: 0,
    },
     {
      question: "My favorite anime character  ?",
      options: ["Aren", "Luffy", "Zoro"],
      correct: 1,
    },
    {
    question: "A heart-shaped chocolate box has 12 chocolates 🍫. If we eat 1/4 of them, how many are left?",
    options: ["9", "3", "8"],
    correct: 0
  },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (index) => {
    if (index === questions[current].correct) {
      setScore((prev) => prev + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };
 const isPerfect = score === questions.length;

 if (showResult) {
  const reward = getReward(score, questions.length);

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-white text-center px-4 sm:px-6 py-10 max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Quiz Completed 💘
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-6">
          You scored {score} out of {questions.length}
        </p>

        {reward === "perfect" && (
          <>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
              100% Compatibility Unlocked ❤️
            </h3>
            <RewardCards count={score} isPerfect={isPerfect} />
          </>
        )}

        {reward === "good" && (
          <>
            <h3 className="text-lg sm:text-xl md:text-2xl mb-6">
              Pretty amazing together 💕
            </h3>
            <RewardCards count={score} />
          </>
        )}

        {reward === "funny" && (
          <>
            <h3 className="text-lg sm:text-xl md:text-2xl mb-6">
              Interesting score 😏
            </h3>
            <RewardCards count={score} />
          </>
        )}

        <Link href="/valentine-week">
          <button className="mt-10 bg-white text-pink-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Continue →
          </button>
        </Link>
      </motion.div>
    </div>
  );
}


  return (
    <motion.div
      key={current}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white text-center px-6 mt-52"
    >
      <h2 className="text-3xl font-bold mb-6">
        {questions[current].question}
      </h2>

      <div className="flex flex-col gap-4">
        {questions[current].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            {option}
          </button>
        ))}
      </div>

      <p className="mt-6">
        ❤️ {current + 1} / {questions.length}
      </p>
    </motion.div>
  );
}
