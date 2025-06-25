"use client"
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { useLanguage } from "../../contexts/language-context";
import { LanguageSelector } from "../../components/language-selector";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function ThankYouPage() {
  const { t } = useLanguage();

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

        {/* Main Content */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Logo */}
            <motion.div 
              className="mb-8 md:mb-12"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-40 h-16 md:w-48 md:h-20 mx-auto mb-6 relative">
                <Image
                  src="/logo-up-designer.png"
                  alt="UP DESIGNER"
                  fill
                  className="object-contain hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Success Icon */}
            <motion.div
              className="mb-8 md:mb-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </motion.div>

            {/* Main Message */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight max-w-4xl mx-auto drop-shadow-lg px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("thankyou.title")
                .split(" ")
                .map((word, index) => {
                  if (
                    word.includes("botão") ||
                    word.includes("botón") ||
                    word.includes("bouton") ||
                    word.includes("pulsante") ||
                    word.includes("Schaltfläche")
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

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center gap-4 mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-400"></div>
            </motion.div>

            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-green-500/25 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="w-5 h-5" />
                {t("thankyou.back")}
                <Sparkles className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Success Badge */}
            <motion.div
              className="mt-8 md:mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Pagamento Confirmado</span>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
} 