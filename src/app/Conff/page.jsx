"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const messages = [
  "Hmm… I think you misclicked 😌\nTry again carefully ❤️",
  "Are you sureeee? 🤨\nI spent hours making this 🥺",
  "Okay now you’re just testing me 😏\nBut I’m not giving up.",
  "Listen… the YES button looks better anyway 👀✨",
  "Imagine saying no to someone this dedicated 😌",
  "My heart just buffered for 2 seconds 💔\nReload and choose wisely 😌",
  "This is getting suspicious…\nAre you playing hard to get? 😏",
  "Fine.\nEvery time you click NO… the YES button grows stronger 💪❤️",
  "The universe wants you to press YES 🌍✨\nDon’t fight destiny.",
  "Okay last warning…\nI might start looking extra cute now 🥺",
];

const gifs = [
  "/gifs/1.gif",
  "/gifs/2.gif",
  "/gifs/3.gif",
  "/gifs/4.gif",
  "/gifs/5.gif",
  "/gifs/6.gif",
  "/gifs/7.gif",
  "/gifs/8.gif",
  "/gifs/9.gif",
  "/gifs/10.gif",
];

export default function FinalPage() {
  const [noClicks, setNoClicks] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [moveMode, setMoveMode] = useState(false);

  const handleNoClick = () => {
    const next = noClicks + 1;
    setNoClicks(next);

    if (!moveMode) {
      setMoveMode(true);
    }

    const maxX = window.innerWidth / 3;
    const maxY = window.innerHeight / 4;

    setPosition({
      x: Math.random() * maxX - maxX / 2,
      y: Math.random() * maxY - maxY / 2,
    });

    setYesScale((prev) => prev + 0.15);
  };

  const currentMessage =
    noClicks === 0
      ? "Choose wisely 😌"
      : noClicks < messages.length
      ? messages[noClicks - 1]
      : "You really thought I’d let you escape? 😌\nJust press YES already ❤️";

  const currentGif = gifs[noClicks % gifs.length];

  if (accepted) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-600 to-red-500 text-white text-center px-6">
       
        <motion.img
          src={"/gifs/29.gif"}
          alt="reaction gif"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-64 h-64 object-cover rounded-2xl mb-6 shadow-2xl"
        />
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-5xl font-bold mb-6"
        >
         “Yay! You accepted 💘" “You just made my Valentine’s Day the happiest ever ❤️🥰”
        </motion.h1>
{
      
           <button
          className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          <Link href={"/constellation"} >Continue →</Link>
        </button>
        }
       
      </div>
    );
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pink-400 to-red-400 text-white text-center px-6">

      <h1 className="text-4xl font-bold mb-6">
        So… will you be my Valentine? 💘
      </h1>

      {noClicks > 0 && (
        <motion.img
          key={noClicks}
          src={currentGif}
          alt="reaction gif"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-64 h-64 object-cover rounded-2xl mb-6 shadow-2xl"
        />
      )}

      <motion.div
        key={currentMessage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 max-w-md whitespace-pre-line text-lg font-medium"
      >
        {currentMessage}
      </motion.div>

      <div className="relative flex items-center justify-center gap-8">

        <motion.button
          onClick={() => setAccepted(true)}
          animate={{ scale: yesScale }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold shadow-xl z-10"
        >
          YES ❤️
        </motion.button>

        {!moveMode ? (
          <button
            onClick={handleNoClick}
            className="bg-black text-white px-8 py-3 rounded-full shadow-xl"
          >
            NO 💔
          </button>
        ) : (
          <motion.button
            onClick={handleNoClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute bg-black text-white px-8 py-3 rounded-full shadow-xl"
          >
            NO 💔
          </motion.button>
        )}

      </div>
    </div>
  );
}
