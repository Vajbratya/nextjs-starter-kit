"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useState } from "react";

export default function SideBySide() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentImage, setCurrentImage] = useState("https://i.ibb.co/WVCLjb7/Captura-de-tela-2024-09-18-204508.png");

  const images = [
    {
      src: "https://i.ibb.co/WVCLjb7/Captura-de-tela-2024-09-18-204508.png",
      alt: "Interface Principal",
    },
    {
      src: "https://i.ibb.co/dLt0LJF/Captura-de-tela-2024-10-22-213600.png",
      alt: "Sugestões em Tempo Real",
    },
    {
      src: "https://i.ibb.co/M18HYPg/image.png",
      alt: "Autotexto Inteligente",
    }
  ];

  const handleImageHover = (index: number) => {
    setCurrentImage(images[index].src);
  };

  return (
    <section className="relative bg-white dark:bg-black py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7CFFD410_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_#7CFFD410_0%,_transparent_70%)]" />

      <div className="container max-w-[1400px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left side - Feature list */}
          <div className="space-y-10">
            <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4]">
              Tecnologia de Ponta para Laudos Médicos
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "IA Avançada",
                  description: "Algoritmos de última geração para geração precisa de laudos médicos",
                },
                {
                  title: "Integração Completa",
                  description: "Compatível com seus sistemas e fluxos de trabalho existentes",
                },
                {
                  title: "Segurança Garantida",
                  description: "Proteção de dados de acordo com LGPD e padrões internacionais",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-[#7CFFD4]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#7CFFD4]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#7CFFD4]/20 group"
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <motion.div 
                  className="relative w-full h-full"
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={currentImage}
                    alt="Preview do Sistema Laudos.AI"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />

                  {/* Preview buttons */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4">
                    {images.map((img, index) => (
                      <div
                        key={index}
                        onMouseEnter={() => handleImageHover(index)}
                        className={`
                          relative group/preview cursor-pointer
                          ${currentImage === img.src ? 'ring-2 ring-[#7CFFD4]' : ''}
                        `}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={120}
                          height={80}
                          className="rounded-lg object-cover opacity-70 hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/preview:opacity-100 transition-opacity">
                          {img.alt}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Background effects */}
            <div className="absolute inset-0 -z-10 transform translate-x-4 translate-y-4">
              <div className="w-full h-full rounded-2xl bg-[#7CFFD4]/5 group-hover:bg-[#7CFFD4]/10 transition-colors duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
