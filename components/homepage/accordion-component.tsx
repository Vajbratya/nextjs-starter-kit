import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComponent() {
    return (
        <div className="flex flex-col w-full max-w-[1400px] mx-auto px-6 py-24">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black dark:from-white to-[#7CFFD4] text-center mb-12">
                Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Como a Laudos.AI se integra com meu sistema atual?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        A Laudos.AI oferece integração perfeita com os principais sistemas PACS/RIS do mercado através de APIs seguras e protocolos padrão do setor. Nossa equipe técnica fornece suporte completo durante todo o processo de integração.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Quanto tempo leva para implementar o sistema?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        A implementação típica leva de 1 a 3 dias, incluindo integração, treinamento e personalização dos templates. Nosso time oferece suporte dedicado para garantir uma transição suave.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Como vocês garantem a segurança dos dados?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        Utilizamos criptografia de ponta a ponta, servidores em conformidade com LGPD e ISO 27001, backups automáticos e políticas rigorosas de acesso. Todos os dados são processados e armazenados no Brasil.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Posso personalizar os modelos de laudo?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        Sim! Oferecemos total flexibilidade para personalizar templates, terminologias e fluxos de trabalho de acordo com as necessidades específicas da sua clínica ou hospital.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Qual o suporte oferecido?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        Oferecemos suporte técnico 24/7, treinamento completo para sua equipe, atualizações regulares do sistema e consultoria contínua para otimização do uso da plataforma.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-[#7CFFD4]/20">
                    <AccordionTrigger className="text-black dark:text-white hover:text-[#7CFFD4] dark:hover:text-[#7CFFD4]">
                        Quais são as certificações de segurança e compliance?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-400">
                        A Laudos.AI é totalmente compatível com HIPAA, LGPD e ISO 27001. Nossa infraestrutura segue os mais rigorosos padrões internacionais de segurança em saúde, incluindo criptografia em repouso e em trânsito, controles de acesso baseados em função (RBAC), logs de auditoria detalhados e backups redundantes. Todos os dados são processados e armazenados em data centers certificados no Brasil.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
