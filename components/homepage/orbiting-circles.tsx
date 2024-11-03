"use client";

import { motion } from "framer-motion";

export default function OrbitingCircles() {
  const orbitingElements = [
    { icon: "📝", label: "Laudos" },
    { icon: "⚡", label: "Rápido" },
    { icon: "🔒", label: "Seguro" },
    { icon: "🤖", label: "IA" },
  ];

  return (
    <div className="relative w-full h-[400px]">
      {/* Central element */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 rounded-full bg-[#7CFFD4]/10 backdrop-blur-sm flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-[#7CFFD4] text-2xl font-bold">Laudos.AI</div>
      </motion.div>

      {/* Orbiting elements */}
      {orbitingElements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-full h-full -mt-[200px] -ml-[200px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            delay: i * -5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -ml-12 bg-[#7CFFD4]/10 backdrop-blur-sm p-3 rounded-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          >
            <div className="text-xl">{element.icon}</div>
            <div className="text-[#7CFFD4] text-sm">{element.label}</div>
          </motion.div>
        </motion.div>
      ))}

      {/* Pulse rings */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7CFFD4]/20"
          initial={{ width: 100, height: 100, opacity: 0.8 }}
          animate={{
            width: [100, 300],
            height: [100, 300],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
