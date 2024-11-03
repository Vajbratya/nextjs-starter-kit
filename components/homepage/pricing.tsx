"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "sonner"
import { TITLE_TAILWIND_CLASS } from "@/utils/constants"
import { useRouter } from "next/navigation"

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  user: any
  handleCheckout: any
  priceIdMonthly: any
  priceIdYearly: any
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#7CFFD4] mb-4">{title}</h1>
    <p className="text-gray-400">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2 bg-black/50 border border-[#7CFFD4]/20">
      <TabsTrigger value="0" className="text-base data-[state=active]:bg-[#7CFFD4] data-[state=active]:text-black">
        <p>Mensal</p>
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base data-[state=active]:bg-[#7CFFD4] data-[state=active]:text-black">
        <p>Anual</p>
      </TabsTrigger>
    </TabsList>
  </Tabs>
)

const PricingCard = ({ user, handleCheckout, isYearly, title, priceIdMonthly, priceIdYearly, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => {
  const router = useRouter();
  return (
    <Card
      className={cn(
        `w-72 flex flex-col justify-between py-1 bg-black border-[#7CFFD4]/20 backdrop-blur-sm hover:border-[#7CFFD4]/40 transition-all duration-300 mx-auto sm:mx-0`,
        {
          "border-[#7CFFD4]": popular,
          "animate-background-shine bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] animate-shimmer": exclusive,
        }
      )}>
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className="text-white text-lg">{title}</CardTitle>
              <div className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-[#7CFFD4]/10 text-[#7CFFD4]", {
                "bg-[#7CFFD4] text-black": popular,
              })}>
                Economia de ${monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-white text-lg">{title}</CardTitle>
          )}
          <div className="flex gap-0.5 text-[#7CFFD4]">
            <h2 className="text-3xl font-bold">{yearlyPrice && isYearly ? "R$" + yearlyPrice : monthlyPrice ? "R$" + monthlyPrice : "Personalizado"}</h2>
            <span className="flex flex-col justify-end text-sm mb-1">{yearlyPrice && isYearly ? "/ano" : monthlyPrice ? "/mês" : null}</span>
          </div>
          <CardDescription className="pt-1.5 h-12 text-gray-400">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button
          onClick={() => {
            if (user?.id) {
              handleCheckout(isYearly ? priceIdYearly : priceIdMonthly, true)
            } else {
              toast("Faça login ou cadastre-se para continuar", {
                description: "Você precisa estar logado para fazer uma assinatura",
                action: {
                  label: "Cadastrar",
                  onClick: () => router.push("/sign-up"),
                },
              })
            }
          }}
          className={cn(
            "relative w-full bg-[#7CFFD4] text-black hover:bg-[#7CFFD4]/90 transition-colors",
            { "bg-[#7CFFD4] hover:bg-[#7CFFD4]/90": popular }
          )}
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-[#7CFFD4]" />
    <p className="pt-0.5 text-gray-300 text-sm">{text}</p>
  </div>
)

export default function Pricing() {
  const [isYearly, setIsYearly] = useState<boolean>(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)
  const { user } = useUser();
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null)

  useEffect(() => {
    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!))
  }, [])

  const handleCheckout = async (priceId: string, subscription: boolean) => {

    try {
      const { data } = await axios.post(`/api/payments/create-checkout-session`,
        { userId: user?.id, email: user?.emailAddresses?.[0]?.emailAddress, priceId, subscription });

      if (data.sessionId) {
        const stripe = await stripePromise;

        const response = await stripe?.redirectToCheckout({
          sessionId: data.sessionId,
        });

        return response
      } else {
        console.error('Failed to create checkout session');
        toast('Failed to create checkout session')
        return
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      toast('Error during checkout')
      return
    }
  };

  const plans = [
    {
      title: "Starter",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: "Ideal para clínicas pequenas",
      features: [
        "Até 100 laudos/mês",
        "Suporte por email",
        "Integração básica",
        "Backup diário"
      ],
      priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      priceIdYearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      actionLabel: "Começar Agora",
    },
    {
      title: "Pro",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      description: "Para clínicas em crescimento",
      features: [
        "Laudos ilimitados",
        "Suporte prioritário",
        "Integrações avançadas",
        "Backup em tempo real"
      ],
      actionLabel: "Escolher Pro",
      priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      priceIdYearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      popular: true,
    },
    {
      title: "Enterprise",
      description: "Soluções personalizadas para sua operação",
      features: [
        "Volume personalizado",
        "Suporte dedicado 24/7",
        "Integrações customizadas",
        "SLA garantido"
      ],
      actionLabel: "Falar com Vendas",
      priceIdMonthly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      priceIdYearly: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
      exclusive: true,
    },
  ]

  return (
    <div className="bg-white dark:bg-black py-32">
      <div className="container max-w-[1400px] mx-auto px-6">
        <PricingHeader 
          title="Planos que Crescem com Você" 
          subtitle="Escolha o plano ideal para suas necessidades" 
        />
        <PricingSwitch onSwitch={togglePricingPeriod} />
        <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-10 mt-12">
          {plans.map((plan) => (
            <PricingCard 
              user={user} 
              handleCheckout={handleCheckout} 
              key={plan.title} 
              {...plan} 
              isYearly={isYearly}
            />
          ))}
        </section>
      </div>
    </div>
  )
}