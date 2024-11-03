"use client"
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';

export default function Footer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data: any) => {
        // ... existing submit logic
    };

    return (
        <footer className="border-t border-[#7CFFD4]/10 dark:bg-black bg-white">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="border-b border-[#7CFFD4]/10 py-12 lg:border-b-0 lg:border-l lg:py-16 lg:pl-16">
                        {/* Newsletter Section */}
                        <div className="relative">
                            {/* Beehive Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="honeycomb-pattern" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4]">
                                    Fique por dentro
                                </h3>
                                <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-400">
                                    Receba as últimas atualizações sobre IA em radiologia e novos recursos do Laudos.AI
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)} 
                                    className="mt-6 flex flex-col gap-3 p-4 rounded-xl border border-[#7CFFD4]/20 bg-white/5 dark:bg-black/50 backdrop-blur-sm">
                                    <Input
                                        {...register('email', { required: true })}
                                        placeholder="Seu melhor email"
                                        type="email"
                                        className="bg-transparent border-[#7CFFD4]/20 focus:border-[#7CFFD4] transition-colors"
                                    />
                                    <Button 
                                        type="submit"
                                        className="bg-[#7CFFD4] text-black hover:bg-[#7CFFD4]/90 transition-colors"
                                    >
                                        Inscrever-se
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 lg:py-16 lg:pr-16">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div>
                                <p className="font-medium text-black dark:text-white">Redes Sociais</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link 
                                            href="https://www.linkedin.com/in/natanribeiro"
                                            target="_blank" 
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#7CFFD4] transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-medium text-black dark:text-white">Links Úteis</p>
                                <ul className="mt-6 space-y-4 text-sm">
                                    <li>
                                        <Link 
                                            href="/docs" 
                                            className="text-gray-600 dark:text-gray-400 hover:text-[#7CFFD4] transition-colors"
                                        >
                                            Documentação
                                        </Link>
                                    </li>
                                    <li>
                                        <Link 
                                            href="/about" 
                                            className="text-gray-600 dark:text-gray-400 hover:text-[#7CFFD4] transition-colors"
                                        >
                                            Sobre Nós
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-[#7CFFD4]/10 pt-8">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    &copy; 2024 Laudos.AI. Todos os direitos reservados.
                                </p>
                                <div className="flex gap-4">
                                    <Link 
                                        href="/privacy" 
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#7CFFD4] transition-colors"
                                    >
                                        Privacidade
                                    </Link>
                                    <Link 
                                        href="/terms" 
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#7CFFD4] transition-colors"
                                    >
                                        Termos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .honeycomb-pattern {
                    background-color: currentColor;
                    -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='24' height='28' viewBox='0 0 24 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0l12 7v14l-12 7L0 21V7l12-7zm10 7.87L12 2.43 2 7.87v12.26l10 5.44 10-5.44V7.87z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                    mask-image: url("data:image/svg+xml,%3Csvg width='24' height='28' viewBox='0 0 24 28' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 0l12 7v14l-12 7L0 21V7l12-7zm10 7.87L12 2.43 2 7.87v12.26l10 5.44 10-5.44V7.87z' fill='%23000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </footer>
    )
}
