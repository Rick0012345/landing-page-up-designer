"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const logos = [
  {
    name: "Brainovation",
    category: "Tech",
    image2d: "/images/logos/2d/brainovation-2d.png",
    image3d: "/images/logos/3d/brainovation-3d.png",
    color: "from-pink-500 via-blue-500 to-cyan-500",
    description: "Agência Web - Ideias Conectadas",
  },
  {
    name: "D&P Maçonaria",
    category: "Construção",
    image2d: "/images/logos/2d/maconaria-2d.png",
    image3d: "/images/logos/3d/maconaria-3d.png",
    color: "from-red-500 via-orange-500 to-amber-500",
    description: "Superior Pedreiro",
  },
  {
    name: "Florista",
    category: "Flores",
    image2d: "/images/logos/2d/florista-2d.png",
    image3d: "/images/logos/3d/florista-3d.png",
    color: "from-pink-500 via-rose-500 to-red-500",
    description: "Boutique de Flores",
  },
  {
    name: "Top Mecânica",
    category: "Automotivo",
    image2d: "/images/logos/2d/mecanica-2d.png",
    image3d: "/images/logos/3d/mecanica-3d.png",
    color: "from-orange-500 via-red-500 to-rose-500",
    description: "Mecânica Automotiva Certificada",
  },
  {
    name: "Sweet Bunny",
    category: "Doces",
    image2d: "/images/logos/2d/sweet-bunny-2d.png",
    image3d: "/images/logos/3d/sweet-bunny-3d.png",
    color: "from-red-500 via-pink-500 to-rose-500",
    description: "Gelateria",
  },
  {
    name: "Corpo & Mente",
    category: "Saúde",
    image2d: "/images/logos/2d/corpo-mente-2d.png",
    image3d: "/images/logos/3d/corpo-mente-3d.png",
    color: "from-green-500 via-emerald-500 to-cyan-500",
    description: "Criando Saúde e Bem Estar",
  },
  {
    name: "Max Finança",
    category: "Finanças",
    image2d: "/images/logos/2d/max-financa-2d.png",
    image3d: "/images/logos/3d/max-financa-3d.png",
    color: "from-gray-500 via-red-500 to-rose-500",
    description: "Assessores Financeiros",
  },
  {
    name: "iMother",
    category: "Maternidade",
    image2d: "/images/logos/2d/imother-2d.png",
    image3d: "/images/logos/3d/imother-3d.png",
    color: "from-gray-800 via-gray-600 to-gray-400",
    description: "Maternidade",
  },
]

export function LogoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [is3DMode, setIs3DMode] = useState(false)

  // Auto-toggle entre 2D e 3D a cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIs3DMode((prev) => !prev)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-8">
      {/* Grid de Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="group relative logo-gallery-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="enhanced-card rounded-xl p-4 md:p-6 text-center hover-lift relative overflow-hidden">
              {/* Background gradient animado */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Container da imagem com animação 2D→3D */}
              <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-3 md:mb-4 relative overflow-hidden rounded-xl bg-white shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${index}-${is3DMode ? "3d" : "2d"}`}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotateY: is3DMode ? -90 : 90,
                      z: is3DMode ? -50 : 50,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      z: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      rotateY: is3DMode ? 90 : -90,
                      z: is3DMode ? 50 : -50,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      delay: index * 0.1,
                    }}
                    className="absolute inset-0"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                  >
                    <Image
                      src={is3DMode ? logo.image3d : logo.image2d}
                      alt={logo.name}
                      fill
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 80px, 112px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Efeito de profundidade para 3D */}
                {is3DMode && (
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-black/10 pointer-events-none" />
                )}
              </div>

              {/* Informações do logo */}
              <h3 className="text-white font-semibold text-sm md:text-base mb-1 group-hover:text-orange-300 transition-colors duration-300">
                {logo.name}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300 mb-1 md:mb-2">
                {logo.category}
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 leading-tight">
                {logo.description}
              </p>

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer" />
              </div>
            </div>

            {/* Hover border effect */}
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border-2 border-orange-500/50 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
