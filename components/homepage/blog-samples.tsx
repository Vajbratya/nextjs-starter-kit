"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    slug: "impacto-ia-radiologia",
    title: "O Impacto da IA na Radiologia",
    excerpt: "Como a inteligência artificial está revolucionando o diagnóstico por imagem e melhorando a precisão dos laudos médicos.",
    image: "https://i.ibb.co/wQRw1SV/0-3.png",
    date: "15 de Março, 2024",
    readTime: "8 min",
    category: "Tecnologia",
    author: {
      name: "Han Dengshi",
      role: "Diretor de Tecnologia e Co-fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    }
  },
  {
    slug: "ia-radiologia-avancada",
    title: "IA na Radiologia: Uma Revolução no Diagnóstico por Imagem",
    excerpt: "Uma análise aprofundada de como a inteligência artificial está transformando a prática radiológica.",
    image: "https://i.ibb.co/WVCLjb7/Captura-de-tela-2024-09-18-204508.png",
    date: "10 de Março, 2024",
    readTime: "10 min",
    category: "Tecnologia",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    }
  },
  {
    slug: "comparacao-laudosai-concorrentes",
    title: "Comparação: Laudos.AI vs Concorrentes",
    excerpt: "Uma análise detalhada das vantagens do Laudos.AI em relação a outras soluções de laudos radiológicos no mercado brasileiro.",
    image: "https://i.ibb.co/3zxSXTn/natan-paraisk-RADIOLOGY-REPORTS-WITH-AI-ar-43-style-raw-s-44ea6ffc-871b-408e-afd8-6f32b72565ae.png",
    date: "5 de Março, 2024",
    readTime: "7 min",
    category: "Análise",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    }
  }
];

export default function BlogSample() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-[#7CFFD4]/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container max-w-[1400px] mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4]">
              Últimas do Blog
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Artigos e atualizações sobre IA em radiologia
            </p>
          </div>
          <Link 
            href="/blog"
            className="mt-4 md:mt-0 px-6 py-3 bg-[#7CFFD4]/10 hover:bg-[#7CFFD4]/20 text-[#7CFFD4] rounded-full transition-colors"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white dark:bg-black border border-[#7CFFD4]/10 rounded-xl overflow-hidden hover:border-[#7CFFD4]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,255,212,0.1)]"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#7CFFD4] text-black text-sm font-medium rounded-full">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span className="px-3 py-1 bg-[#7CFFD4]/10 text-[#7CFFD4] rounded-full">
                      {post.readTime} de leitura
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-[#7CFFD4] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-3 border-t border-[#7CFFD4]/10">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-[#7CFFD4]/20"
                    />
                    <div>
                      <p className="font-medium text-black dark:text-white">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
