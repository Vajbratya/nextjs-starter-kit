import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
}

// Blog post data with full content and metadata
const blogPosts = {
  "impacto-ia-radiologia": {
    title: "O Impacto da IA na Radiologia",
    description: "Como a inteligência artificial está revolucionando o diagnóstico por imagem e melhorando a precisão dos laudos médicos.",
    date: "15 de Março, 2024",
    author: {
      name: "Han Dengshi",
      role: "Diretor de Tecnologia e Co-fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    },
    image: "https://i.ibb.co/wQRw1SV/0-3.png",
    readTime: "8 min",
    content: `
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <h1 class="text-4xl md:text-5xl font-bold mb-8">O Impacto da IA na Radiologia: Revolucionando o Diagnóstico por Imagem</h1>
        
        <div class="bg-[#7CFFD4]/10 border border-[#7CFFD4]/20 rounded-xl p-6 my-8">
          <p class="text-xl leading-relaxed">A inteligência artificial est redefinindo os padrões de diagnóstico por imagem, oferecendo precisão e eficiência sem precedentes na radiologia moderna.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div class="bg-white dark:bg-black/50 p-6 rounded-xl border border-[#7CFFD4]/20">
            <h3 class="text-2xl font-bold mb-4">Redução de Tempo</h3>
            <p class="text-xl">70% menos tempo na elaboração de laudos</p>
          </div>
          <div class="bg-white dark:bg-black/50 p-6 rounded-xl border border-[#7CFFD4]/20">
            <h3 class="text-2xl font-bold mb-4">Precisão</h3>
            <p class="text-xl">Aumento de 95% na detecção precoce</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-12 mb-6">A Revolução do Diagnóstico Assistido por IA</h2>
        <p class="text-lg leading-relaxed mb-6">Nos últimos anos, testemunhamos uma transformação significativa na radiologia com a introdução de sistemas de IA avançados. Estes sistemas não apenas auxiliam na detecção precoce de patologias, mas também aumentam significativamente a produtividade dos radiologistas.</p>

        <div class="my-12 p-8 bg-gradient-to-r from-[#7CFFD4]/5 to-transparent rounded-xl border-l-4 border-[#7CFFD4]">
          <h3 class="text-2xl font-bold mb-4">Principais Benefícios da IA em Radiologia</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="text-[#7CFFD4]">●</span>
              <span>Redução do tempo de análise em até 70%</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#7CFFD4]">●</span>
              <span>Maior precisão na detecção de anomalias</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#7CFFD4]">●</span>
              <span>Diminuição de falsos positivos e negativos</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#7CFFD4]">●</span>
              <span>Padronização dos laudos radiológicos</span>
            </li>
            <li class="flex items-center gap-3">
              <span class="text-[#7CFFD4]">●</span>
              <span>Suporte à decisão clínica em tempo real</span>
            </li>
          </ul>
        </div>

        <blockquote class="text-2xl italic border-l-4 border-[#7CFFD4] pl-6 my-12">
          "A IA não substitui o radiologista, mas potencializa sua capacidade de análise e precisão diagnóstica."
        </blockquote>

        <h2 class="text-3xl font-bold mt-12 mb-6">O Futuro da Radiologia com IA</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div class="p-6 rounded-xl border border-[#7CFFD4]/20 hover:border-[#7CFFD4]/40 transition-colors">
            <h4 class="text-xl font-bold mb-3">Algoritmos Avançados</h4>
            <p>Desenvolvimento contínuo de modelos mais precisos e específicos para diferentes modalidades de imagem.</p>
          </div>
          <div class="p-6 rounded-xl border border-[#7CFFD4]/20 hover:border-[#7CFFD4]/40 transition-colors">
            <h4 class="text-xl font-bold mb-3">Integração Perfeita</h4>
            <p>Sistemas que se adaptam perfeitamente aos fluxos de trabalho existentes em diferentes instituições.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-[#7CFFD4]/10 to-transparent p-8 rounded-xl my-12">
          <h2 class="text-3xl font-bold mb-6">Conclusão</h2>
          <p class="text-lg leading-relaxed">A integração da IA na radiologia não é apenas uma tendência, mas uma revolução necessária que está melhorando significativamente a qualidade do diagnóstico por imagem e o cuidado ao paciente.</p>
        </div>
      </article>
    `
  },
  "ia-radiologia-avancada": {
    title: "IA na Radiologia: Uma Revolução no Diagnóstico por Imagem",
    description: "Uma análise aprofundada de como a inteligência artificial está transformando a prática radiológica.",
    image: "https://i.ibb.co/WVCLjb7/Captura-de-tela-2024-09-18-204508.png",
    date: "10 de Março, 2024",
    readTime: "10 min",
    category: "Tecnologia",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    },
    content: `
      <article class="prose prose-lg max-w-none">
        <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6 mb-12">
          <p class="text-xl leading-relaxed">
            A inteligência artificial está transformando fundamentalmente a prática da radiologia, oferecendo novas possibilidades para diagnóstico mais preciso e eficiente. De acordo com estudos recentes, a adoção de IA em radiologia cresceu de 0% para 30% entre 2015 e 2020, demonstrando uma tendência clara de evolução tecnológica no setor.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Detecção Precoce</h3>
            <p class="text-gray-600 dark:text-gray-400">Aumento de 95% na precisão de detecção e redução de 30% em diagnósticos falso-positivos</p>
          </div>

          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Otimização do Fluxo</h3>
            <p class="text-gray-600 dark:text-gray-400">Redução de 70% no tempo de elaboração de laudos e melhor gerenciamento de filas de exames</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold mb-6">Aplicações Práticas da IA em Radiologia</h2>
        
        <div class="space-y-6 mb-12">
          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Neurologia</h3>
            <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Detecção precoce de Alzheimer através de padrões sutis em MRI</li>
              <li>Identificação de áreas afetadas por AVC em questão de segundos</li>
              <li>Monitoramento da progressão de tumores cerebrais</li>
            </ul>
          </div>

          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Oncologia</h3>
            <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Detecção automatizada de nódulos pulmonares</li>
              <li>Classificação precisa de lesões mamárias</li>
              <li>Acompanhamento longitudinal do crescimento tumoral</li>
            </ul>
          </div>

          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Cardiologia</h3>
            <ul class="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Quantificação automática da calcificação coronária</li>
              <li>Análise de função ventricular</li>
              <li>Previsão de riscos cardiovasculares</li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-[#7CFFD4]/10 to-transparent border border-[#7CFFD4]/20 rounded-xl p-8 mb-12">
          <h2 class="text-2xl font-bold mb-4">O Futuro da Radiologia com IA</h2>
          <p class="text-gray-600 dark:text-gray-400">
            A evolução contínua da IA promete algoritmos mais sofisticados e precisos, maior integração com sistemas existentes e personalização do cuidado ao paciente. Como Curtis Langlotz, radiologista de Stanford, afirma: "AI won't replace radiologists, but radiologists who use AI will replace radiologists who don't."
          </p>
        </div>
      </article>
    `
  },
  "integracao-pacs-ris": {
    title: "Integração com PACS/RIS: Otimizando seu Fluxo de Trabalho",
    description: "Um guia detalhado sobre como integrar sistemas PACS/RIS com soluções modernas de IA, otimizando o fluxo de trabalho em radiologia.",
    date: "5 de Março, 2024",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    },
    image: "https://i.ibb.co/0M0TyLP/integracao-pacs.jpg",
    readTime: "7 min",
    content: `
      <article class="prose prose-lg dark:prose-invert max-w-none">
        <h1 class="text-4xl md:text-5xl font-bold mb-8">Integração com PACS/RIS: Otimizando seu Fluxo de Trabalho</h1>

        <div class="bg-[#7CFFD4]/10 border border-[#7CFFD4]/20 rounded-xl p-6 my-8">
          <p class="text-xl leading-relaxed">A integração eficiente entre sistemas PACS/RIS e soluções modernas de IA é fundamental para otimizar o fluxo de trabalho em radiologia.</p>
        </div>

        <div class="my-12">
          <h2 class="text-3xl font-bold mb-6">Processo de Implementação</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-black/50 p-6 rounded-xl border border-[#7CFFD4]/20">
              <h4 class="text-xl font-bold mb-4">Fase 1: Análise</h4>
              <ul class="space-y-2">
                <li>• Avaliação do ambiente atual</li>
                <li>• Identificação de necessidades</li>
                <li>• Planejamento de recursos</li>
              </ul>
            </div>
            <div class="bg-white dark:bg-black/50 p-6 rounded-xl border border-[#7CFFD4]/20">
              <h4 class="text-xl font-bold mb-4">Fase 2: Implementação</h4>
              <ul class="space-y-2">
                <li>• Configuração de interfaces</li>
                <li>• Testes de integração</li>
                <li>• Validação de fluxos</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="my-12 p-8 bg-gradient-to-r from-[#7CFFD4]/5 to-transparent rounded-xl border-l-4 border-[#7CFFD4]">
          <h3 class="text-2xl font-bold mb-4">Benefícios da Integração</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <span class="text-[#7CFFD4]">●</span>
                <span>Fluxo de trabalho otimizado</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#7CFFD4]">●</span>
                <span>Redução de erros manuais</span>
              </li>
            </ul>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <span class="text-[#7CFFD4]">●</span>
                <span>Acesso rápido a informações</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#7CFFD4]">●</span>
                <span>Melhor experiência do usuário</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-gradient-to-r from-[#7CFFD4]/10 to-transparent p-8 rounded-xl my-12">
          <h2 class="text-3xl font-bold mb-6">Conclusão</h2>
          <p class="text-lg leading-relaxed">Uma integração bem planejada e executada resulta em maior eficiência operacional e melhor qualidade no atendimento ao paciente.</p>
        </div>
      </article>
    `
  },
  "comparacao-laudosai-concorrentes": {
    title: "Comparação: Laudos.AI vs Concorrentes",
    description: "Uma análise detalhada das vantagens do Laudos.AI em relação a outras soluções de laudos radiológicos no mercado brasileiro.",
    image: "https://i.ibb.co/3zxSXTn/natan-paraisk-RADIOLOGY-REPORTS-WITH-AI-ar-43-style-raw-s-44ea6ffc-871b-408e-afd8-6f32b72565ae.png",
    date: "5 de Março, 2024",
    readTime: "7 min",
    category: "Análise",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    },
    content: `
      <div class="prose prose-lg max-w-none">
        <h1 class="text-4xl md:text-5xl font-bold mb-8">Por que o Laudos.AI é a Escolha Superior para Radiologistas</h1>

        <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6 mb-12">
          <p class="text-xl leading-relaxed">
            O mercado de softwares para laudos radiológicos está em constante evolução, mas o Laudos.AI, impulsionado pela tecnologia proprietária LaudAI™, se destaca significativamente dos concorrentes.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Motor de IA</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span>Laudos.AI</span>
                <span class="text-[#7CFFD4]">LaudAI™ proprietária</span>
              </div>
              <div class="flex items-center justify-between text-gray-500">
                <span>Concorrentes</span>
                <span>IAs genéricas ou adaptadas</span>
              </div>
            </div>
          </div>

          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Precisão</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <span>Laudos.AI</span>
                <span class="text-[#7CFFD4]">>95% de acurácia</span>
              </div>
              <div class="flex items-center justify-between text-gray-500">
                <span>Concorrentes</span>
                <span>Variável, <80%</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6 mb-12">
          <h2 class="text-2xl font-bold mb-6">Planos e Preços</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-4 border-b border-[#7CFFD4]/10">
              <div>
                <span class="font-medium">Básico</span>
                <p class="text-sm text-gray-500">Até 200 laudos/mês</p>
              </div>
              <span class="text-[#7CFFD4] font-medium">R$199/mês</span>
            </div>
            <div class="flex items-center justify-between pb-4 border-b border-[#7CFFD4]/10">
              <div>
                <span class="font-medium">Profissional</span>
                <p class="text-sm text-gray-500">Até 500 laudos/mês</p>
              </div>
              <span class="text-[#7CFFD4] font-medium">R$399/mês</span>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <span class="font-medium">Enterprise</span>
                <p class="text-sm text-gray-500">Volume personalizado</p>
              </div>
              <span class="text-[#7CFFD4] font-medium">Consulte</span>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Integração</h3>
            <p class="text-gray-600 dark:text-gray-400">Nativa e sem hardware adicional, compatível com principais sistemas PACS/RIS do mercado.</p>
          </div>

          <div class="bg-black/5 dark:bg-white/5 border border-[#7CFFD4]/20 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4">Suporte</h3>
            <p class="text-gray-600 dark:text-gray-400">24/7 com equipe especializada, incluindo radiologistas experientes.</p>
          </div>
        </div>

        <div class="bg-gradient-to-r from-[#7CFFD4]/10 to-transparent border border-[#7CFFD4]/20 rounded-xl p-8">
          <h2 class="text-2xl font-bold mb-4">Conclusão</h2>
          <p class="text-gray-600 dark:text-gray-400">
            O Laudos.AI não é apenas mais uma opção no mercado - é a escolha superior para radiologistas que buscam excelência, eficiência e confiabilidade. Nossa combinação única de tecnologia proprietária LaudAI™, preços transparentes e resultados comprovados nos torna a escolha ideal para clínicas e hospitais de todos os portes.
          </p>
        </div>
      </div>
    `
  },
  "conheca-laudosai": {
    title: "Conheça o Laudos.AI: O Futuro dos Laudos Radiológicos",
    description: "Descubra como nossa plataforma revolucionária com IA proprietária está transformando a forma como radiologistas trabalham.",
    image: "https://i.ibb.co/wQRw1SV/0-3.png",
    date: "5 de Março, 2024",
    readTime: "7 min",
    category: "Produto",
    author: {
      name: "Natan Ribeiro",
      role: "CEO e Fundador",
      avatar: "https://i.ibb.co/t2b7BjW/1hx98-EHHqgw.png"
    },
    content: `
      # Conheça o Laudos.AI: O Futuro dos Laudos Radiológicos

      O Laudos.AI é uma plataforma revolucionária que está redefinindo o padrão de eficiência e precisão na elaboração de laudos radiológicos. Desenvolvida por radiologistas para radiologistas, nossa solução combina tecnologia de ponta com uma compreensão profunda das necessidades reais da prática clínica.

      ## A Tecnologia por Trás da Inovação

      No coração do Laudos.AI está a LaudAI™, nossa inteligência artificial proprietária, especialmente desenvolvida para compreender e processar imagens médicas com precisão excepcional. Diferentemente de soluções genéricas, a LaudAI™ foi treinada com milhões de exames reais, garantindo resultados consistentes e confiáveis.

      ### Principais Benefícios

      - **Aumento de Produtividade**: Reduza o tempo de elaboração de laudos em até 70%
      - **Alta Precisão**: Mais de 95% de acurácia comprovada em estudos clínicos
      - **Integração Perfeita**: Compatível com os principais sistemas PACS/RIS do mercado
      - **Segurança de Dados**: Certificação HIPAA Compliant e criptografia de ponta a ponta

      ## Planos Flexíveis para Cada Necessidade

      Oferecemos opções transparentes e escaláveis:
      - **Básico**: R$199/mês (até 200 laudos)
      - **Profissional**: R$399/mês (até 500 laudos)
      - **Enterprise**: Planos personalizados para grandes volumes

      ## Casos de Sucesso

      Grandes instituições já confiam no Laudos.AI:
      - Hospital Sírio-Libanês
      - Grupo Fleury
      - Hospital Oswaldo Cruz
      - HCFMUSP

      ## Por Que Escolher o Laudos.AI?

      1. **Tecnologia Proprietária**: Nossa LaudAI™ é constantemente atualizada e melhorada
      2. **Suporte Especializado**: Equipe técnica disponível 24/7
      3. **Sem Custos Ocultos**: Preços transparentes e sem surpresas
      4. **Resultados Comprovados**: ROI positivo em menos de 3 meses

      ## Comece Hoje

      Transforme sua prática radiológica com o Laudos.AI. Agende uma demonstração gratuita e descubra como podemos ajudar sua clínica ou hospital a alcançar novos níveis de eficiência e precisão.
    `
  }
};

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'O artigo que você procura não foi encontrado.'
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      type: 'article',
      authors: [post.author.name],
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    }
  };
}

// Adicione o componente do logo aqui também
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

export default async function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <LaudosAILogo />
          <div className="px-3 py-1 bg-[#7CFFD4]/90 text-black text-sm rounded-full">
            {post.category}
          </div>
        </div>
        <div className="absolute bottom-0 w-full p-8">
          <div className="container max-w-[1000px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/80">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-[1000px] mx-auto px-6 py-12">
        <div 
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-400"
        />
        
        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link 
            href="/blog"
            className="text-[#7CFFD4] hover:underline flex items-center gap-2"
          >
            ← Voltar para o blog
          </Link>
        </div>
      </div>
    </div>
  );
} 