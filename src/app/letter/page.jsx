"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const pages = [
  {
    title: "My Dearest ❤️",
    text: `From the very first moment,
something felt different.

You walked into my life
and everything became softer.`,
  },
  {
    title: "A Little Confession 💭",
    text: `I replay our moments
more than you know.

Your smile?
Dangerous.`,
  },
  {
    title: "A Promise 💍",
    text: `This isn’t just a question.

It is s a promise —
to choose you every day.`,
  },
  {
    title: "One Last Thing 💘",
    text: `So here I am…

with all my heart,

Will you be mine?`,
  },
];

export default function LetterBook() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-200 to-pink-300 p-4">

      <div
        className="relative w-full max-w-4xl h-[75vh]"
        style={{ perspective: "3000px" }}
      >

        <div className="absolute left-0 top-0 h-full w-4 bg-rose-400 rounded-l-2xl shadow-inner z-20" />

        {pages.map((page, index) => {
          const isFlipped = index < currentPage;

          return (
            <motion.div
              key={index}
              animate={{ rotateY: isFlipped ? -180 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute w-full h-full origin-left"
              style={{
                transformStyle: "preserve-3d",
                zIndex: pages.length - index,
              }}
            >
              <div
                className="absolute w-full h-full bg-[#fffaf5] rounded-2xl shadow-2xl p-6 md:p-12"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="h-full flex flex-col justify-between overflow-hidden">
                  <div className="overflow-y-auto pr-2">
                    <h2 className="text-2xl md:text-3xl font-serif mb-6 text-rose-600">
                      {page.title}
                    </h2>

                    <p className="whitespace-pre-line text-gray-700 leading-relaxed text-base md:text-lg">
                      {page.text}
                    </p>
                  </div>

                  <div className="flex justify-end mt-6">
                    {index === currentPage && (
                      <button
                        onClick={() =>
                          setCurrentPage((prev) =>
                            prev < pages.length ? prev + 1 : prev
                          )
                        }
                        className="px-5 py-2 bg-rose-500 text-white rounded-full shadow hover:scale-105 transition"
                      >
                        Next →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="absolute w-full h-full bg-white rounded-2xl shadow-2xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />
              
            </motion.div>
          );
        })}
        {
            
           <button
          className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition"
        >
          <Link href={"/Conff"} >Continue →</Link>
        </button>
        }
      </div>
    </div>
  );
}
