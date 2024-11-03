"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const testimonials = [
  {
    name: "Dr. Ricardo Silva",
    role: "Radiologista Chefe",
    body: "Reduzi o tempo médio de laudo de 40 para 12 minutos. A qualidade e consistência são impressionantes.",
    img: "https://avatar.vercel.sh/silva",
    clinic: "Hospital São Lucas - SP"
  },
  {
    name: "Dra. Marina Santos",
    role: "Diretora de Radiologia",
    body: "Nossa produtividade aumentou 3x sem comprometer a qualidade. O suporte é excepcional.",
    img: "https://avatar.vercel.sh/santos",
    clinic: "Clínica Diagnóstica SP"
  },
  {
    name: "Dr. Carlos Oliveira",
    role: "Radiologista",
    body: "Integração perfeita com nosso PACS. Economizamos 4 horas por dia em trabalho manual.",
    img: "https://avatar.vercel.sh/oliveira",
    clinic: "Centro de Diagnóstico RJ"
  },
  {
    name: "Dra. Ana Costa",
    role: "Coordenadora de Imagem",
    body: "ROI incrível. Aumentamos nossa capacidade em 60% sem aumentar a equipe.",
    img: "https://avatar.vercel.sh/costa",
    clinic: "Instituto de Radiologia"
  },
  {
    name: "Dr. Paulo Mendes",
    role: "Radiologista",
    body: "A IA realmente entende o contexto clínico. Os laudos são precisos e bem estruturados.",
    img: "https://avatar.vercel.sh/mendes",
    clinic: "Hospital Central - MG"
  },
  {
    name: "Dra. Beatriz Lima",
    role: "Radiologista Sênior",
    body: "Excelente para ensino. Residentes aprendem mais rápido com os modelos estruturados.",
    img: "https://avatar.vercel.sh/lima",
    clinic: "Hospital Universitário - RS"
  },
  {
    name: "Dr. Fernando Gomes",
    role: "Diretor Clínico",
    body: "Reduzimos erros em 95% e melhoramos a satisfação dos pacientes significativamente.",
    img: "https://avatar.vercel.sh/gomes",
    clinic: "Rede de Clínicas - PR"
  },
  {
    name: "Dra. Carla Sousa",
    role: "Radiologista",
    body: "Interface intuitiva e templates personalizáveis. Perfeito para nossa rotina.",
    img: "https://avatar.vercel.sh/sousa",
    clinic: "Clínica Imagem - BA"
  }
];

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

const TestimonialCard = ({
  img,
  name,
  role,
  body,
  clinic
}: {
  img: string;
  name: string;
  role: string;
  body: string;
  clinic: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[180px] w-[400px] mx-6 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-[#7CFFD4]/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        "dark:border-[#7CFFD4]/20 dark:bg-black/10 dark:hover:bg-black/20",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="h-14 w-14 rounded-full border border-[#7CFFD4]/20 overflow-hidden">
          <Image 
            src={img} 
            alt={`${name} avatar`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-base font-medium text-black dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-[#7CFFD4]">{role}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{clinic}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
        &ldquo;{body}&rdquo;
      </blockquote>
    </figure>
  );
};

export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7CFFD410] to-transparent dark:from-[#7CFFD410] dark:to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7CFFD420_0%,_transparent_50%)]" />
      </div>

      <div className="container max-w-[1400px] mx-auto px-6 pt-32 pb-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4] mb-8">
            Laudos Médicos Precisos e Eficientes com IA
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Transforme seus exames e achados em relatórios completos com o suporte de IA de ponta. 
            Ferramentas avançadas para radiologistas gerarem laudos de forma rápida, precisa e segura.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-in"
              className="px-8 py-3 rounded-lg bg-[#7CFFD4] text-black font-semibold hover:bg-[#7CFFD4]/90 transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/sign-in"
              className="px-8 py-3 rounded-lg border border-[#7CFFD4] text-[#7CFFD4] font-semibold hover:bg-[#7CFFD4]/10 transition-colors"
            >
              Ver Demonstração
            </Link>
          </div>

          {/* New metrics section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#7CFFD4]/10 pt-12"
          >
            {[
              { value: "10K+", label: "Laudos Gerados" },
              { value: "98%", label: "Precisão" },
              { value: "24/7", label: "Disponibilidade" },
              { value: "5min", label: "Tempo Médio" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#7CFFD4]">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* New Marquee section */}
          <div className="relative mt-16 h-[400px] w-full overflow-hidden">
            <Marquee 
              className="[--duration:90s] [--gap:2rem]"
              pauseOnHover
              fade={true}
            >
              {firstRow.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
            <div className="h-8"/>
            <Marquee 
              className="[--duration:80s] [--gap:2rem]"
              reverse 
              pauseOnHover
              fade={true}
            >
              {secondRow.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </Marquee>
            
            {/* Stronger gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-black dark:via-black/50 dark:to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[200%] h-0.5 bg-gradient-to-r from-transparent via-[#7CFFD440] to-transparent top-1/4 -left-1/2 transform -rotate-6" />
        <div className="absolute w-[200%] h-0.5 bg-gradient-to-r from-transparent via-[#7CFFD440] to-transparent top-2/4 -left-1/2 transform rotate-3" />
      </div>
    </section>
  );
}
