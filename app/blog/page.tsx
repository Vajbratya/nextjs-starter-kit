"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Metadata precisa estar em um arquivo separado ou usar generateMetadata
// export const metadata: Metadata = {
//   title: "Blog | Laudos.AI",
//   description: "Artigos e atualizações sobre IA em radiologia, segurança de dados e integrações com sistemas PACS/RIS.",
// };

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

// Logo SVG Component
const LaudosAILogo = () => (
  <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
    <svg
      width="48"
      height="48"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-12"
    >
      <defs>
        <radialGradient id="pulseGradient">
          <stop offset="10%" stopColor="#7CFFD4" />
          <stop offset="95%" stopColor="#7CFFD400" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <mask id="logo-clip">
          <path
            d="M25 25H45V75H25V25ZM45 75H75V85H45V75Z"
            fill="white"
          />
        </mask>
      </defs>
      <rect width="100" height="100" fill="black" />
      <path
        d="M25 25H45V75H25V25ZM45 75H75V85H45V75Z"
        fill="white"
        filter="url(#glow)"
      />
      <g mask="url(#logo-clip)">
        <circle r="3" fill="url(#pulseGradient)" className="animate-pulse" />
      </g>
    </svg>
  </Link>
);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#7CFFD4]/10 to-transparent py-24">
        <div className="container max-w-[1400px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <LaudosAILogo />
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4]">
                Blog Laudos.AI
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Artigos, tutoriais e atualizações sobre IA em radiologia, segurança de dados e integrações com sistemas PACS/RIS.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container max-w-[1400px] mx-auto px-6 py-12">
        <Link href={`/blog/${blogPosts[0].slug}`} className="group">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 w-full p-8 md:p-12">
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <LaudosAILogo />
                <div className="px-3 py-1 bg-[#7CFFD4]/90 text-black text-sm rounded-full">
                  {blogPosts[0].category}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-white/80 mb-6 max-w-2xl">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/80">
                <Image
                  src={blogPosts[0].author.avatar}
                  alt={blogPosts[0].author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">{blogPosts[0].author.name}</p>
                  <p className="text-sm">{blogPosts[0].date} · {blogPosts[0].readTime} de leitura</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white dark:bg-black border border-[#7CFFD4]/10 rounded-xl overflow-hidden hover:border-[#7CFFD4]/30 transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <LaudosAILogo />
                    <div className="px-3 py-1 bg-[#7CFFD4]/90 text-black text-sm rounded-full">
                      {post.category}
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime} de leitura</span>
                  </div>

                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-[#7CFFD4] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 flex items-center justify-between border-t border-[#7CFFD4]/10">
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
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
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 