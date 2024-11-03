"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "O Impacto da IA na Radiologia",
    excerpt: "Como a inteligência artificial está revolucionando o diagnóstico por imagem",
    image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/blog/ai-radiology.jpg",
    date: "Mar 15, 2024",
    readTime: "5 min",
    category: "Tecnologia",
    author: {
      name: "Dr. Silva",
      role: "Radiologista Chefe",
    }
  },
  {
    title: "Segurança de Dados em Laudos",
    excerpt: "Práticas recomendadas para proteger informações sensíveis de pacientes",
    image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/blog/security.jpg",
    date: "Mar 10, 2024",
    readTime: "4 min",
    category: "Segurança",
    author: {
      name: "Dra. Santos",
      role: "Especialista em Segurança",
    }
  },
  {
    title: "Integração com PACS/RIS",
    excerpt: "Guia completo para integrar sistemas de radiologia com IA",
    image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/blog/integration.jpg",
    date: "Mar 5, 2024",
    readTime: "6 min",
    category: "Tutorial",
    author: {
      name: "Dr. Oliveira",
      role: "Diretor de TI",
    }
  }
];

export default function BlogSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4]">
          Blog
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Últimas novidades e atualizações sobre IA em radiologia
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative"
          >
            <Link href="/blog/post-slug" className="block">
              <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#7CFFD4]/90 text-black text-sm rounded-full">
                  {post.category}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-[#7CFFD4] transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {post.author.role}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-[#7CFFD4] group-hover:translate-x-1 transition-transform">
                    Ler mais
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
} 