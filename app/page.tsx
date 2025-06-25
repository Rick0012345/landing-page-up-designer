"use client"

import type React from "react"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Zap,
  Award,
  Palette,
  MessageCircle,
  Instagram,
  Facebook,
  ChevronDown,
  Sparkles,
  Target,
  Rocket,
  Heart,
} from "lucide-react"
import { LogoGallery } from "@/components/logo-gallery"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import PayPalButton from "@/components/paypal-button"
import { PayPalProvider } from "@/components/PayPalProvider"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function LogoLandingPage() {
  return <LogoLandingPageContent />
}

function LogoLandingPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const { t, language } = useLanguage()

  // Atualizar os arrays packages e faqs para usar as traduções
  const packages = [
    {
      name: t("package.ia.name"),
      price: t("package.ia.price"),
      originalPrice: t("package.ia.originalPrice"),
      description: t("package.ia.description"),
      features: [
        t("package.ia.feature1"),
        t("package.ia.feature2"),
        t("package.ia.feature3"),
        t("package.ia.feature4"),
        t("package.ia.feature5"),
      ],
      stripeUrl: "https://buy.stripe.com/fZu7sMg1NasV8Y11rZ9Zm00",
      popular: false,
      color: "from-blue-500 to-cyan-500",
      icon: "🧠",
      recommendation: t("package.ia.recommendation"),
    },
    {
      name: t("package.smart.name"),
      price: t("package.smart.price"),
      originalPrice: t("package.smart.originalPrice"),
      description: t("package.smart.description"),
      features: [t("package.smart.feature1"), t("package.smart.feature2"), t("package.smart.feature3")],
      stripeUrl: "https://buy.stripe.com/6oU14oaHtgRjfmp8Ur9Zm01",
      popular: false,
      color: "from-purple-500 to-pink-500",
      icon: "🎨",
      recommendation: t("package.smart.recommendation"),
    },
    {
      name: t("package.pro.name"),
      price: t("package.pro.price"),
      originalPrice: t("package.pro.originalPrice"),
      description: t("package.pro.description"),
      features: [
        t("package.pro.feature1"),
        t("package.pro.feature2"),
        t("package.pro.feature3"),
        t("package.pro.feature4"),
      ],
      stripeUrl: "https://buy.stripe.com/28EaEYeXJgRjdeh6Mj9Zm02",
      popular: true,
      color: "from-orange-500 to-red-500",
      icon: "🚀",
      recommendation: t("package.pro.recommendation"),
    },
    {
      name: t("package.premium.name"),
      price: t("package.premium.price"),
      originalPrice: t("package.premium.originalPrice"),
      description: t("package.premium.description"),
      features: [
        t("package.premium.feature1"),
        t("package.premium.feature2"),
        t("package.premium.feature3"),
        t("package.premium.feature4"),
        t("package.premium.feature5"),
        t("package.premium.feature6"),
      ],
      stripeUrl: "https://buy.stripe.com/00w28s02P6cFcad7Qn9Zm03",
      popular: false,
      color: "from-emerald-500 to-teal-500",
      icon: "👑",
      recommendation: t("package.premium.recommendation"),
    },
  ]

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ]

  const handleBuyNow = (pkg: any) => {
    setSelectedPackage(pkg)
    setShowCheckout(true)
  }

  const handleSocialContact = (platform: string, packageName?: string, packagePrice?: string) => {
    let message = ""

    if (packageName && packagePrice) {
      // Mensagens traduzidas para cada pacote e idioma
      const whatsappMessages = {
        pt: {
          "IA START": "Olá! Gostaria de adquirir o pacote IA START por €34,99.",
          "DESIGN SMART": "Olá! Gostaria de adquirir o pacote DESIGN SMART por €49,99.",
          "PRO BRAND": "Olá! Gostaria de adquirir o pacote PRO BRAND por €79,99.",
          "PREMIUM FULL": "Olá! Gostaria de adquirir o pacote PREMIUM FULL por €109,99.",
        },
        es: {
          "IA START": "¡Hola! Me gustaría adquirir el paquete IA START por €34,99.",
          "DESIGN SMART": "¡Hola! Me gustaría adquirir el paquete DESIGN SMART por €49,99.",
          "PRO BRAND": "¡Hola! Me gustaría adquirir el paquete PRO BRAND por €79,99.",
          "PREMIUM FULL": "¡Hola! Me gustaría adquirir el paquete PREMIUM FULL por €109,99.",
        },
        fr: {
          "IA START": "Bonjour ! Je souhaite acheter le forfait IA START pour 34,99 €.",
          "DESIGN SMART": "Bonjour ! Je souhaite acheter le forfait DESIGN SMART pour 49,99 €.",
          "PRO BRAND": "Bonjour ! Je souhaite acheter le forfait PRO BRAND pour 79,99 €.",
          "PREMIUM FULL": "Bonjour ! Je souhaite acheter le forfait PREMIUM FULL pour 109,99 €.",
        },
        it: {
          "IA START": "Ciao! Vorrei acquistare il pacchetto IA START per €34,99.",
          "DESIGN SMART": "Ciao! Vorrei acquistare il pacchetto DESIGN SMART per €49,99.",
          "PRO BRAND": "Ciao! Vorrei acquistare il pacchetto PRO BRAND per €79,99.",
          "PREMIUM FULL": "Ciao! Vorrei acquistare il pacchetto PREMIUM FULL per €109,99.",
        },
        de: {
          "IA START": "Hallo! Ich möchte das IA START Paket für 34,99 € erwerben.",
          "DESIGN SMART": "Hallo! Ich möchte das DESIGN SMART Paket für 49,99 € erwerben.",
          "PRO BRAND": "Hallo! Ich möchte das PRO BRAND Paket für 79,99 € erwerben.",
          "PREMIUM FULL": "Hallo! Ich möchte das PREMIUM FULL Paket für 109,99 € erwerben.",
        },
      }

      message =
        whatsappMessages[language]?.[packageName] ||
        whatsappMessages.pt[packageName] ||
        "Olá! Gostaria de saber mais sobre os pacotes de logo disponíveis."
    } else {
      const generalMessages = {
        pt: "Olá! Gostaria de saber mais sobre os pacotes de logo disponíveis.",
        es: "¡Hola! Me gustaría saber más sobre los paquetes de logo disponibles.",
        fr: "Bonjour ! Je souhaite en savoir plus sur les forfaits de logo disponibles.",
        it: "Ciao! Vorrei sapere di più sui pacchetti logo disponibili.",
        de: "Hallo! Ich möchte mehr über die verfügbaren Logo-Pakete erfahren.",
      }
      message = generalMessages[language] || generalMessages.pt
    }

    const links = {
      whatsapp: `https://wa.me/5528999331545?text=${encodeURIComponent(message)}`,
      instagram: `https://ig.me/m/up_designeer_?text=${encodeURIComponent(message)}`,
      facebook: `https://www.facebook.com/profile.php?id=61571328744041&locale=pt_BR`,
    }
    window.open(links[platform as keyof typeof links], "_blank")
  }

  if (showCheckout && selectedPackage) {
    return <CheckoutPage package={selectedPackage} onBack={() => setShowCheckout(false)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Hero Background" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80" />
      </div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        {/* Language Selector */}
        <div className="absolute top-4 md:top-6 right-4 md:right-6 z-50">
          <LanguageSelector />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
          <motion.div
            className="text-center max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Logo */}
            <motion.div variants={fadeInUp} className="mb-6 md:mb-8">
              <div className="w-40 h-16 md:w-48 md:h-20 mx-auto mb-4 relative">
                <Image
                  src="/logo-up-designer.png"
                  alt="UP DESIGNER"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="flex justify-center gap-4 md:gap-8 mb-8 md:mb-12 flex-wrap">
              <motion.div
                className="flex items-center gap-2 text-cyan-400 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">{t("header.clients")}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-yellow-400 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                <span className="font-medium">{t("header.rating")}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-green-400 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4 text-xs md:text-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">{t("header.experience")}</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg px-4"
            >
              {t("hero.title")
                .split(" ")
                .map((word, index) => {
                  if (
                    word.includes("designer") ||
                    word.includes("profissional") ||
                    word.includes("profesional") ||
                    word.includes("professionnel") ||
                    word.includes("professionale") ||
                    word.includes("professionellen")
                  ) {
                    return (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
                      >
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
            </motion.h1>

            {/* CTA Badges */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 flex-wrap max-w-4xl mx-auto px-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 px-3 py-2 text-xs md:text-sm backdrop-blur-sm">
                  <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  {t("hero.delivery")}
                </Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-3 py-2 text-xs md:text-sm backdrop-blur-sm">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  {t("hero.immediate")}
                </Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-2 text-xs md:text-sm backdrop-blur-sm">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  {t("hero.guarantee")}
                </Badge>
              </motion.div>
            </motion.div>

            {/* Social Proof Intro */}
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg lg:text-xl text-cyan-400 mb-8 md:mb-12 max-w-3xl mx-auto drop-shadow-lg px-4"
            >
              {t("hero.testimonials")}
            </motion.p>
          </motion.div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-16 md:py-20 px-4">
          <TestimonialsCarousel />
        </section>

        {/* Logo Gallery */}
        <section className="py-16 md:py-20 px-4">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg px-4"
            >
              {t("gallery.title")
                .split(" ")
                .map((word, index) => {
                  if (
                    word.includes("SUCESSO") ||
                    word.includes("ÉXITO") ||
                    word.includes("SUCCÈS") ||
                    word.includes("SUCCESSO") ||
                    word.includes("ERFOLG")
                  ) {
                    return (
                      <span key={index} className="text-orange-500">
                        {word}{" "}
                      </span>
                    )
                  }
                  return word + " "
                })}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-300 mb-8 md:mb-12 px-4">
              {t("gallery.subtitle")}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <LogoGallery />
            </motion.div>
          </motion.div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-20 px-4" id="packages">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg px-4">
                {t("packages.title")
                  .split(" ")
                  .map((word, index) => {
                    if (
                      word.includes("PACOTE") ||
                      word.includes("PAQUETE") ||
                      word.includes("FORFAIT") ||
                      word.includes("PACCHETTO") ||
                      word.includes("PAKET")
                    ) {
                      return (
                        <span key={index} className="text-orange-500">
                          {word}{" "}
                        </span>
                      )
                    }
                    return word + " "
                  })}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 px-4">{t("packages.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {packages.map((pkg, index) => (
                <motion.div key={pkg.name} variants={fadeInUp} className="relative">
                  <Card
                    className={`package-card enhanced-card p-4 md:p-6 h-full hover-lift ${pkg.popular ? "popular ring-2 ring-orange-500" : ""}`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-orange-500 text-white px-3 md:px-4 py-1 shadow-lg animate-pulse text-xs md:text-sm">
                          {t("packages.popular")}
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-r ${pkg.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">{pkg.name}</CardTitle>
                      <CardDescription className="text-gray-400 text-xs md:text-sm lg:text-base leading-relaxed">
                        {pkg.description}
                      </CardDescription>
                      <div className="flex items-center justify-center gap-2 mt-3 md:mt-4 flex-wrap">
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">{pkg.price}</span>
                        <span className="text-sm md:text-base lg:text-lg text-gray-400 line-through">
                          {pkg.originalPrice}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 md:space-y-6">
                      <ul className="space-y-2 md:space-y-3">
                        {pkg.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                            <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="space-y-3">
                        <Button
                          onClick={() => handleBuyNow(pkg)}
                          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
                        >
                          {t("packages.select")}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-20 px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg px-4">
                {t("process.title")
                  .split(" ")
                  .map((word, index) => {
                    if (
                      word.includes("FUNCIONA") ||
                      word.includes("FONCTIONNE") ||
                      word.includes("FUNZIONA") ||
                      word.includes("FUNKTIONIERT")
                    ) {
                      return (
                        <span key={index} className="text-orange-500">
                          {word}{" "}
                        </span>
                      )
                    }
                    return word + " "
                  })}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 px-4">{t("process.subtitle")}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Target,
                  title: t("process.step1.title"),
                  desc: t("process.step1.desc"),
                },
                {
                  icon: Palette,
                  title: t("process.step2.title"),
                  desc: t("process.step2.desc"),
                },
                {
                  icon: Rocket,
                  title: t("process.step3.title"),
                  desc: t("process.step3.desc"),
                },
              ].map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 px-4">{step.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg px-4">
                {t("faq.title")
                  .split(" ")
                  .map((word, index) => {
                    if (
                      word.includes("FREQUENTES") ||
                      word.includes("FRECUENTES") ||
                      word.includes("FRÉQUENTES") ||
                      word.includes("FREQUENTI") ||
                      word.includes("FRAGEN")
                    ) {
                      return (
                        <span key={index} className="text-orange-500">
                          {word}{" "}
                        </span>
                      )
                    }
                    return word + " "
                  })}
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="enhanced-card shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base md:text-lg text-left pr-4">{faq.question}</CardTitle>
                        <motion.div animate={{ rotate: openFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                        </motion.div>
                      </div>
                    </CardHeader>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Guarantees Section */}
        <section className="py-16 md:py-20 px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight drop-shadow-lg px-4">
                {t("guarantees.title")
                  .split(" ")
                  .map((word, index) => {
                    if (
                      word.includes("GARANTIAS") ||
                      word.includes("GARANTÍAS") ||
                      word.includes("GARANTIES") ||
                      word.includes("GARANZIE") ||
                      word.includes("GARANTIEN")
                    ) {
                      return (
                        <span key={index} className="text-orange-500">
                          {word}{" "}
                        </span>
                      )
                    }
                    return word + " "
                  })}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  icon: Shield,
                  title: t("guarantees.satisfaction.title"),
                  desc: t("guarantees.satisfaction.desc"),
                },
                {
                  icon: Zap,
                  title: t("guarantees.delivery.title"),
                  desc: t("guarantees.delivery.desc"),
                },
                {
                  icon: Heart,
                  title: t("guarantees.support.title"),
                  desc: t("guarantees.support.desc"),
                },
                {
                  icon: Award,
                  title: t("guarantees.usage.title"),
                  desc: t("guarantees.usage.desc"),
                },
              ].map((guarantee, index) => (
                <motion.div key={index} variants={fadeInUp} className="text-center">
                  <Card className="enhanced-card p-4 md:p-6 h-full hover-lift">
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <guarantee.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-base md:text-lg font-bold mb-2">{guarantee.title}</h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{guarantee.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 md:py-12 px-4 border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center gap-4">
                <div className="w-24 h-10 md:w-32 md:h-12 relative">
                  <Image src="/logo-up-designer.png" alt="UP DESIGNER" fill className="object-contain" />
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSocialContact("whatsapp")}
                    className="hover:bg-green-500/20 p-2"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSocialContact("instagram")}
                    className="hover:bg-pink-500/20 p-2"
                  >
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSocialContact("facebook")}
                    className="hover:bg-blue-500/20 p-2"
                  >
                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-400">
              <p>{t("footer.rights")}</p>
              <div className="flex justify-center gap-4 mt-2 flex-wrap">
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                  <Shield className="w-3 h-3 mr-1" />
                  {t("footer.secure")}
                </Badge>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function CheckoutPage({ package: pkg, onBack }: { package: any; onBack: () => void }) {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    description: "",
    style: "",
    colors: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(pkg.stripeUrl, "_blank")
  }

  const packagePrice = Number.parseFloat(pkg.price.replace("€", "").replace(",", "."))
  const discountedPrice = packagePrice - 10

  const handleSocialContact = (platform: string) => {
    const whatsappMessages = {
      pt: {
        "IA START": "Olá! Gostaria de adquirir o pacote IA START por €34,99.",
        "DESIGN SMART": "Olá! Gostaria de adquirir o pacote DESIGN SMART por €49,99.",
        "PRO BRAND": "Olá! Gostaria de adquirir o pacote PRO BRAND por €79,99.",
        "PREMIUM FULL": "Olá! Gostaria de adquirir o pacote PREMIUM FULL por €109,99.",
      },
      es: {
        "IA START": "¡Hola! Me gustaría adquirir el paquete IA START por €34,99.",
        "DESIGN SMART": "¡Hola! Me gustaría adquirir el paquete DESIGN SMART por €49,99.",
        "PRO BRAND": "¡Hola! Me gustaría adquirir el paquete PRO BRAND por €79,99.",
        "PREMIUM FULL": "¡Hola! Me gustaría adquirir el paquete PREMIUM FULL por €109,99.",
      },
      fr: {
        "IA START": "Bonjour ! Je souhaite acheter le forfait IA START pour 34,99 €.",
        "DESIGN SMART": "Bonjour ! Je souhaite acheter le forfait DESIGN SMART pour 49,99 €.",
        "PRO BRAND": "Bonjour ! Je souhaite acheter le forfait PRO BRAND pour 79,99 €.",
        "PREMIUM FULL": "Bonjour ! Je souhaite acheter le forfait PREMIUM FULL pour 109,99 €.",
      },
      it: {
        "IA START": "Ciao! Vorrei acquistare il pacchetto IA START per €34,99.",
        "DESIGN SMART": "Ciao! Vorrei acquistare il pacchetto DESIGN SMART per €49,99.",
        "PRO BRAND": "Ciao! Vorrei acquistare il pacchetto PRO BRAND per €79,99.",
        "PREMIUM FULL": "Ciao! Vorrei acquistare il pacchetto PREMIUM FULL per €109,99.",
      },
      de: {
        "IA START": "Hallo! Ich möchte das IA START Paket für 34,99 € erwerben.",
        "DESIGN SMART": "Hallo! Ich möchte das DESIGN SMART Paket für 49,99 € erwerben.",
        "PRO BRAND": "Hallo! Ich möchte das PRO BRAND Paket für 79,99 € erwerben.",
        "PREMIUM FULL": "Hallo! Ich möchte das PREMIUM FULL Paket für 109,99 € erwerben.",
      },
    }

    const message =
      whatsappMessages[language]?.[pkg.name] ||
      whatsappMessages.pt[pkg.name] ||
      "Olá! Gostaria de saber mais sobre os pacotes de logo disponíveis."

    const links = {
      whatsapp: `https://wa.me/5528999331545?text=${encodeURIComponent(message)}`,
      instagram: `https://ig.me/m/up_designeer_?text=${encodeURIComponent(message)}`,
      facebook: `https://www.facebook.com/profile.php?id=61571328744041&locale=pt_BR`,
    }
    window.open(links[platform as keyof typeof links], "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-bg.jpg" alt="Background" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/80 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-8 md:py-12">
        <Button onClick={onBack} variant="ghost" className="mb-6 md:mb-8 text-cyan-400 hover:text-cyan-300">
          {t("checkout.back")}
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <Card className="enhanced-card p-4 md:p-6 shadow-2xl">
              <CardHeader className="text-center">
                <div className="w-32 h-12 md:w-40 md:h-16 mx-auto relative">
                  <Image src="/logo-up-designer.png" alt="UP DESIGNER" fill className="object-contain" />
                </div>
                <CardTitle className="text-xl md:text-2xl lg:text-3xl font-bold">{pkg.name}</CardTitle>
                <CardDescription className="text-base md:text-lg text-gray-300 mt-2 leading-relaxed">
                  {pkg.description}
                </CardDescription>
                <div className="flex justify-center items-center gap-2 mt-4 md:mt-6 flex-wrap">
                  <span className="text-lg md:text-xl text-gray-400 line-through">de {pkg.originalPrice}</span>
                </div>
                <div className="flex justify-center items-center gap-2 mt-1 flex-wrap">
                  <span className="text-2xl md:text-3xl font-bold text-orange-500">por {pkg.price}</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">{t("checkout.original")}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-4xl">{pkg.icon}</span>
                </div>
                <h4 className="font-semibold mb-4 text-lg">{t("checkout.included")}</h4>
                <ul className="space-y-3 max-w-md mx-auto">
                  {pkg.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-left">{feature}</span>
                    </li>
                  ))}
                </ul>
                {pkg.recommendation && (
                  <div className="mt-6 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/30">
                    <p className="text-sm text-blue-300 font-medium">{pkg.recommendation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-white border-green-500/30 p-4 md:p-6 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-green-600 flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  {t("checkout.special")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-lg mb-2">{t("checkout.buy")}</p>
                  <div className="text-3xl font-bold text-green-600 mb-2">{t("checkout.free")}</div>
                  <p className="text-sm text-gray-600 mb-4">{t("checkout.only")}</p>
                  <div className="text-4xl font-bold text-orange-500">
                    €{discountedPrice.toFixed(2).replace(".", ",")}
                  </div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-cyan-600 text-center">{t("checkout.how")}</h4>
                  <ol className="text-sm space-y-1 text-gray-600 max-w-xs mx-auto">
                    <li>1. {t("checkout.step1")}</li>
                    <li>2. {t("checkout.step2")}</li>
                    <li>3. {t("checkout.step3")}</li>
                    <li>4. {t("checkout.step4")}</li>
                  </ol>
                </div>
                <div className="text-center space-y-3">
                  <Button
                    onClick={handleSubmit}
                    className="w-full md:w-3/4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    💳 {t("checkout.pay")} €{discountedPrice.toFixed(2).replace(".", ",")}
                  </Button>

                  <PayPalProvider>
                    <PayPalButton
                      amount={discountedPrice.toFixed(2)}
                      onSuccess={() => console.log("PayPal payment successful")}
                      onError={(error) => console.error("PayPal payment error:", error)}
                    />
                  </PayPalProvider>
                </div>
              </CardContent>
            </Card>

            <Card className="enhanced-card p-4 md:p-6 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{t("checkout.social")}</CardTitle>
                <CardDescription>{t("checkout.contact")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center gap-4">
                  <Button
                    onClick={() => handleSocialContact("whatsapp")}
                    className="w-full md:w-3/4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t("checkout.whatsapp")} {pkg.price}
                  </Button>
                  <Button
                    onClick={() => handleSocialContact("instagram")}
                    className="w-full md:w-3/4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                    {t("checkout.instagram")} {pkg.price}
                  </Button>
                  <Button
                    onClick={() => handleSocialContact("facebook")}
                    className="w-full md:w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5" />
                    {t("checkout.facebook")} {pkg.price}
                  </Button>
                </div>
                <div className="text-center text-sm text-gray-400 mt-4">
                  <p>{t("checkout.personalized")}</p>
                  <p>{t("checkout.fast")}</p>
                  <p>{t("checkout.preferences")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
