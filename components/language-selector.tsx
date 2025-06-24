"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useLanguage, type Language } from "@/contexts/language-context"
import Image from "next/image"

const languages = [
  { code: "pt" as Language, name: "Português", flag: "/images/flags/pt.png" },
  { code: "es" as Language, name: "Español", flag: "/images/flags/es.png" },
  { code: "fr" as Language, name: "Français", flag: "/images/flags/fr.png" },
  { code: "it" as Language, name: "Italiano", flag: "/images/flags/it.png" },
  { code: "de" as Language, name: "Deutsch", flag: "/images/flags/de.png" },
]

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 sm:px-4 text-white hover:bg-white/20 transition-all duration-300 min-w-[60px] sm:min-w-[120px]"
      >
        <div className="w-6 h-4 relative">
          <Image
            src={currentLanguage.flag || "/placeholder.svg"}
            alt={currentLanguage.name}
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <span className="hidden sm:block text-sm font-medium truncate max-w-[80px]">{currentLanguage.name}</span>
        <ChevronDown
          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl overflow-hidden z-50 min-w-[160px] sm:min-w-[180px]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-white/20 transition-colors duration-200 ${
                  language === lang.code ? "bg-white/10" : ""
                }`}
              >
                <div className="w-6 h-4 relative">
                  <Image
                    src={lang.flag || "/placeholder.svg"}
                    alt={lang.name}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white truncate">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
