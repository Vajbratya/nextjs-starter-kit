"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';
import { cn } from "@/lib/utils";

export default function MarketingCards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const institutions = [
    { 
      name: "HCFMUSP", 
      logo: "https://i.ibb.co/b6nxjGr/hcfmusp.png",
      width: 180,
      height: 60,
      className: ""
    },
    { 
      name: "Fleury", 
      logo: "https://i.ibb.co/P9Mbgy9/fleury.jpg",
      width: 160,
      height: 50,
      className: ""
    },
    { 
      name: "Hospital Oswaldo Cruz", 
      logo: "https://i.ibb.co/V2Cp3XC/oswaldo.png",
      width: 240,
      height: 70,
      className: ""
    },
    { 
      name: "Hospital Sírio-Libanês", 
      logo: "https://i.ibb.co/fvM3gQN/sirio-libanes.png",
      width: 180,
      height: 60,
      className: ""
    },
  ];

  const cards = [
    {
      icon: "⚡",
      title: "Velocidade",
      description: "Reduza o tempo de elaboração de laudos em até 70%",
      gradient: "from-[#7CFFD4] to-[#2DD4BF]",
    },
    {
      icon: "🎯",
      title: "Precisão",
      description: "Laudos padronizados e completos em todos os casos",
      gradient: "from-[#7CFFD4] to-[#06B6D4]",
    },
    {
      icon: "🔄",
      title: "Integração",
      description: "Compatível com os principais sistemas PACS/RIS",
      gradient: "from-[#7CFFD4] to-[#2563EB]",
    },
    {
      icon: "🛡️",
      title: "Segurança",
      description: "Dados protegidos com criptografia de ponta a ponta",
      gradient: "from-[#7CFFD4] to-[#7C3AED]",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-black py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7CFFD410_0%,_transparent_70%)]" />
        <div className="absolute w-full h-full bg-[linear-gradient(to_right,#00000000_0%,#7CFFD410_50%,#00000000_100%)] animate-pulse" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-6">
        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4] mb-16">
            Utilizado diariamente pelos melhores radiologistas das melhores instituições
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {institutions.map((institution, i) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    delay: i * 0.1
                  }
                } : {}}
                whileHover={{ 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="relative h-24"
              >
                <Image
                  src={institution.logo}
                  alt={institution.name}
                  width={institution.width}
                  height={institution.height}
                  style={{ 
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                  className={cn("w-auto h-full", institution.className)}
                  priority
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Original Marketing Cards */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative z-10 h-full p-6 rounded-2xl bg-white dark:bg-black border border-[#7CFFD4]/20 backdrop-blur-sm hover:border-[#7CFFD4]/40 transition-all duration-300">
                {/* Icon */}
                <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center text-2xl`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-black dark:text-white mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7CFFD4]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#7CFFD4]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-300 group-hover:duration-200" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
