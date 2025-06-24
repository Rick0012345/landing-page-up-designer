"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const testimonials = [
  {
    id: 1,
    name: "João Santos",
    company: "Brainovation",
    rating: 5,
    text: {
      pt: "Melhor investimento que fiz para a minha empresa. Logótipo profissional por um preço justo!",
      es: "¡La mejor inversión que hice para mi empresa. Logotipo profesional a un precio justo!",
      fr: "Le meilleur investissement que j'aie fait pour mon entreprise. Logo professionnel à un prix juste !",
      it: "Il miglior investimento che abbia fatto per la mia azienda. Logo professionale a un prezzo giusto!",
      de: "Die beste Investition, die ich für mein Unternehmen gemacht habe. Professionelles Logo zu einem fairen Preis!",
    },
    avatar: "/images/clients/client-1.png",
    logo: "/images/logos/2d/brainovation-2d.png",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    company: "Top Mecânica",
    rating: 5,
    text: {
      pt: "Serviço rápido e de qualidade. Meu negócio ganhou uma identidade visual incrível!",
      es: "Servicio rápido y de calidad. ¡Mi negocio ganó una identidad visual increíble!",
      fr: "Service rapide et de qualité. Mon entreprise a gagné une identité visuelle incroyable !",
      it: "Servizio veloce e di qualità. La mia attività ha guadagnato un'identità visiva incredibile!",
      de: "Schneller und qualitativ hochwertiger Service. Mein Unternehmen hat eine unglaubliche visuelle Identität erhalten!",
    },
    avatar: "/images/clients/client-2.png",
    logo: "/images/logos/2d/mecanica-2d.png",
  },
  {
    id: 3,
    name: "Ricardo Silva",
    company: "Max Finança",
    rating: 5,
    text: {
      pt: "Profissionalismo e criatividade em cada detalhe. Superou minhas expectativas!",
      es: "Profesionalismo y creatividad en cada detalle. ¡Superó mis expectativas!",
      fr: "Professionnalisme et créativité dans chaque détail. Cela a dépassé mes attentes !",
      it: "Professionalità e creatività in ogni dettaglio. Ha superato le mie aspettative!",
      de: "Professionalität und Kreativität in jedem Detail. Es hat meine Erwartungen übertroffen!",
    },
    avatar: "/images/clients/client-3.png",
    logo: "/images/logos/2d/max-financa-2d.png",
  },
  {
    id: 4,
    name: "Maria Silva",
    company: "Florista Bella",
    rating: 5,
    text: {
      pt: "Adorei o resultado! O logo ficou exatamente como imaginei. Recomendo muito!",
      es: "¡Me encantó el resultado! El logo quedó exactamente como lo imaginé. ¡Lo recomiendo mucho!",
      fr: "J'ai adoré le résultat ! Le logo est exactement comme je l'imaginais. Je le recommande vivement !",
      it: "Ho adorato il risultato! Il logo è esattamente come l'avevo immaginato. Lo raccomando molto!",
      de: "Ich liebte das Ergebnis! Das Logo ist genau so geworden, wie ich es mir vorgestellt hatte. Sehr empfehlenswert!",
    },
    avatar: "/images/clients/client-4.png",
    logo: "/images/logos/2d/florista-2d.png",
  },
]

export function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { language } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Card className="testimonial-card enhanced-card p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Background gradient animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 animate-pulse" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-6 md:gap-8 mb-6 md:mb-8 flex-wrap">
                <motion.div
                  key={`avatar-${currentTestimonial}`}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.4 }}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl relative">
                    <Image
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 112px"
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-75 blur animate-pulse -z-10" />
                </motion.div>

                <motion.div
                  key={`logo-${currentTestimonial}`}
                  className="relative"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -180,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    type: "spring",
                    bounce: 0.6,
                  }}
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 bg-white rounded-xl p-3 md:p-4 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200 relative overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].logo || "/placeholder.svg"}
                      alt={`${testimonials[currentTestimonial].company} logo`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 112px, 128px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              </div>

              <motion.p
                className="text-lg md:text-xl mb-6 md:mb-8 italic text-center leading-relaxed max-w-2xl mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                "{testimonials[currentTestimonial].text[language]}"
              </motion.p>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="font-semibold text-cyan-400 text-lg">{testimonials[currentTestimonial].name}</p>
                <p className="text-sm text-gray-400">{testimonials[currentTestimonial].company}</p>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Indicadores de progresso */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? "bg-orange-500 scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
