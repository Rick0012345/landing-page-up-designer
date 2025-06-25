"use client"
import { useState, type ReactNode } from "react"
import type React from "react"

import { createContext, useContext } from "react"

export type Language = "pt" | "es" | "fr" | "it" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations = {
  pt: {
    // Header Stats
    "header.clients": "+2.500 Clientes Satisfeitos",
    "header.rating": "4,9/5 Avaliação",
    "header.experience": "+5 anos de Experiência",

    // Hero Section
    "hero.title":
      "Invista em qualidade e estratégia. Transforme a sua identidade visual com um designer profissional especializado na criação de logótipos que realmente oferecem resultados.",
    "hero.delivery": "Entrega Rápida",
    "hero.immediate": "Início Imediato",
    "hero.guarantee": "Garantia Total",
    "hero.testimonials": "VEJA O QUE OS NOSSOS CLIENTES DIZEM:",

    // Testimonial
    "testimonial.text": "Melhor investimento que fiz para a minha empresa. Logótipo profissional por um preço justo!",
    "testimonial.author": "João Santos",
    "testimonial.company": "Tech Solutions",

    // Logo Gallery
    "gallery.title": "LOGÓTIPOS ENTREGUES COM SUCESSO",
    "gallery.subtitle": "Veja exemplos de logótipos profissionais em versões 2D e 3D",

    // Packages
    "packages.title": "ESCOLHA O SEU PACOTE",
    "packages.subtitle": "Soluções profissionais para cada necessidade",
    "packages.select": "Selecionar pacote",
    "packages.popular": "MAIS POPULAR",

    // Package IA START
    "package.ia.name": "IA START",
    "package.ia.description": "LOGÓTIPO POR IA, JPG E PNG ALTA RESOLUÇÃO (MARCA DE ÁGUA EM PNG)",
    "package.ia.price": "€34,99",
    "package.ia.originalPrice": "€49,99",
    "package.ia.feature1": "Logótipo gerado por IA com personalização segundo as suas preferências",
    "package.ia.feature2": "Ficheiro JPG de alta resolução, ideal para redes sociais, apresentações e uso digital",
    "package.ia.feature3": "Ficheiro PNG com fundo transparente, pronto para qualquer suporte",
    "package.ia.feature4": "Marca de água em PNG, para proteger a sua criação",
    "package.ia.feature5": "Entrega rápida por e-mail ou WhatsApp",
    "package.ia.recommendation":
      "Indicado para quem precisa de um logótipo rápido, com boa qualidade, pronto para começar a divulgar.",

    // Package DESIGN SMART
    "package.smart.name": "DESIGN SMART",
    "package.smart.description": "JPG + PNG + PDF (IMPRESSÕES, MARCA DE ÁGUA, ADESIVO)",
    "package.smart.price": "€49,99",
    "package.smart.originalPrice": "€69,99",
    "package.smart.feature1": "JPG e PNG de alta resolução",
    "package.smart.feature2": "PDF profissional para impressão de cartões, etiquetas, banners e adesivos",
    "package.smart.feature3": "Marca de água e versão para adesivo, com o logótipo centrado",
    "package.smart.recommendation":
      "Ótimo para quem quer começar a imprimir o logótipo em brindes, papelaria e divulgar em vários canais.",

    // Package PRO BRAND
    "package.pro.name": "PRO BRAND",
    "package.pro.description":
      "JPG + PNG + PDF (IMPRESSÕES, ADESIVO, DOCUMENTOS) + PALETA DE CORES E TIPOGRAFIA + IDENTIDADE VISUAL",
    "package.pro.price": "€79,99",
    "package.pro.originalPrice": "€97,99",
    "package.pro.feature1": "JPG, PNG e PDF (impressão, adesivo, documentos)",
    "package.pro.feature2": "Paleta de cores personalizada com códigos HEX",
    "package.pro.feature3": "Tipografia recomendada para posts e artes",
    "package.pro.feature4": "Identidade visual completa para Instagram, embalagens e materiais",
    "package.pro.recommendation": "Ideal para marcas que querem consistência e impacto visual desde o início.",

    // Package PREMIUM FULL
    "package.premium.name": "PREMIUM FULL",
    "package.premium.description":
      "JPG + PNG + PDF (IMPRESSÕES, ADESIVO, DOCUMENTOS) + PSD EDITÁVEL + IDENTIDADE VISUAL + MANUAL COMPLETO + TIPOGRAFIA + MOCKUPS",
    "package.premium.price": "€109,99",
    "package.premium.originalPrice": "€149,99",
    "package.premium.feature1": "JPG, PNG e PDF para diversos suportes",
    "package.premium.feature2": "PSD editável para Photoshop",
    "package.premium.feature3": "Identidade visual com cores, fontes e estilo definidos",
    "package.premium.feature4": "Manual da marca: aplicação, áreas de respiro, tamanhos mínimos",
    "package.premium.feature5": "Tipografia profissional",
    "package.premium.feature6": "Mockups em camiseta, fachada, cartão e outros",
    "package.premium.recommendation":
      "Pacote feito para marcas que querem escalar, atrair público e apresentar uma imagem profissional impecável.",

    // How it works
    "process.title": "COMO FUNCIONA",
    "process.subtitle": "Processo simples em 3 passos",
    "process.step1.title": "1. Escolha o Pacote",
    "process.step1.desc": "Selecione a opção que melhor atende às suas necessidades",
    "process.step2.title": "2. Preencha as Informações",
    "process.step2.desc": "Conte-nos sobre a sua empresa e preferências de design",
    "process.step3.title": "3. Receba o Seu Logótipo",
    "process.step3.desc": "Entrega em até 24 horas",

    // FAQ
    "faq.title": "PERGUNTAS FREQUENTES",
    "faq.q1": "Quanto tempo demora a entrega do meu logótipo?",
    "faq.a1":
      "O prazo de entrega depende do pacote escolhido, mas normalmente você recebe seu logótipo profissional entre 24 e 48 horas após a confirmação das informações do seu pedido.",
    "faq.q2": "Posso solicitar revisões?",
    "faq.a2":
      "Sim! Você pode solicitar ajustes ou revisões no seu logótipo até que esteja completamente satisfeito com o resultado final.",
    "faq.q3": "Em que formatos recebo o ficheiro?",
    "faq.a3":
      "Você recebe o logótipo nos formatos JPG e PNG em alta resolução. Pacotes avançados incluem também PDF, PSD editável, marca d'água e mockups prontos.",
    "faq.q4": "Há garantia de satisfação?",
    "faq.a4":
      "Sim, garantimos 100% de satisfação ou devolvemos o seu dinheiro em até 7 dias após a entrega, sem burocracia.",
    "faq.q5": "O logótipo será exclusivo?",
    "faq.a5":
      "Sim, todos os logótipos são desenvolvidos de forma única e exclusiva para cada cliente, sem uso de modelos prontos ou cópias.",

    // Guarantees
    "guarantees.title": "AS NOSSAS GARANTIAS",
    "guarantees.satisfaction.title": "Satisfação Garantida",
    "guarantees.satisfaction.desc": "100% do seu dinheiro de volta se não ficar satisfeito",
    "guarantees.delivery.title": "Entrega Rápida",
    "guarantees.delivery.desc": "Receba em até 24 horas",
    "guarantees.support.title": "Suporte Personalizado",
    "guarantees.support.desc": "Atendimento dedicado durante todo o processo",
    "guarantees.usage.title": "Uso Ilimitado",
    "guarantees.usage.desc": "Para web, impressão, redes sociais",

    // Footer
    "footer.rights": "© 2024 LogoPro. Todos os direitos reservados.",
    "footer.terms": "Termos de Utilização",
    "footer.privacy": "Política de Privacidade",
    "footer.secure": "Site Seguro",

    // Checkout
    "checkout.back": "← Voltar aos Pacotes",
    "checkout.included": "Incluído no pacote:",
    "checkout.original": "Preço original com desconto já aplicado",
    "checkout.special": "OFERTA ESPECIAL DO SITE",
    "checkout.buy": "Compre agora pelo site e receba",
    "checkout.free": "€10 GRÁTIS",
    "checkout.only": "O seu logótipo por apenas",
    "checkout.how": "Como funciona:",
    "checkout.step1": "Pagamento adiantado seguro",
    "checkout.step2": "Após confirmação, recolha de informações",
    "checkout.step3": "Criação do seu logótipo personalizado",
    "checkout.step4": "Entrega conforme pacote escolhido",
    "checkout.pay": "PAGAR AGORA",
    "checkout.social": "Ou pague através das redes sociais",
    "checkout.contact": "Fale connosco diretamente e passe as informações por lá",
    "checkout.whatsapp": "Pague através do WhatsApp",
    "checkout.instagram": "Pague através do Instagram",
    "checkout.facebook": "Pague através do Facebook",
    "checkout.personalized": "💬 Atendimento personalizado",
    "checkout.fast": "⚡ Resposta rápida garantida",
    "checkout.preferences": "🎨 Indique as suas preferências diretamente",

    // Thank You Page
    "thankyou.title": "Clique agora no botão para confirmar seu pedido e ativar automaticamente sua recompensa exclusiva",
    "thankyou.back": "Voltar para a página inicial",
  },
  es: {
    // Header Stats
    "header.clients": "+2.500 Clientes Satisfechos",
    "header.rating": "4,9/5 Valoración",
    "header.experience": "+5 años de Experiencia",

    // Hero Section
    "hero.title":
      "Invierte en calidad y estrategia. Transforma tu identidad visual con un diseñador profesional especializado en la creación de logotipos que realmente ofrecen resultados.",
    "hero.delivery": "Entrega Rápida",
    "hero.immediate": "Inicio Inmediato",
    "hero.guarantee": "Garantía Total",
    "hero.testimonials": "MIRA LO QUE DICEN NUESTROS CLIENTES:",

    // Testimonial
    "testimonial.text": "¡La mejor inversión que hice para mi empresa. Logotipo profesional a un precio justo!",
    "testimonial.author": "João Santos",
    "testimonial.company": "Tech Solutions",

    // Logo Gallery
    "gallery.title": "LOGOS ENTREGADOS CON ÉXITO",
    "gallery.subtitle": "Mira ejemplos de logotipos profesionales en versiones 2D y 3D",

    // Packages
    "packages.title": "ELIGE TU PAQUETE",
    "packages.subtitle": "Soluciones profesionales para cada necesidad",
    "packages.select": "Seleccionar paquete",
    "packages.popular": "MÁS POPULAR",

    // Package IA START
    "package.ia.name": "IA START",
    "package.ia.description": "LOGO POR IA, JPG Y PNG ALTA RESOLUCIÓN (MARCA DE AGUA EN PNG)",
    "package.ia.price": "€34,99",
    "package.ia.originalPrice": "€49,99",
    "package.ia.feature1": "Logotipo generado por IA con personalización según tus preferencias",
    "package.ia.feature2": "Archivo JPG de alta resolución, ideal para redes sociales, presentaciones y uso digital",
    "package.ia.feature3": "Archivo PNG con fondo transparente, listo para cualquier soporte",
    "package.ia.feature4": "Marca de agua en PNG para proteger tu diseño",
    "package.ia.feature5": "Entrega rápida por correo o WhatsApp",
    "package.ia.recommendation":
      "Indicado para quienes necesitan un logo rápido, con buena calidad, listo para empezar a promocionar.",

    // Package DESIGN SMART
    "package.smart.name": "DESIGN SMART",
    "package.smart.description": "JPG + PNG + PDF (IMPRESIONES, MARCA DE AGUA, ADHESIVO)",
    "package.smart.price": "€49,99",
    "package.smart.originalPrice": "€69,99",
    "package.smart.feature1": "JPG y PNG de alta resolución",
    "package.smart.feature2": "PDF profesional para impresión de tarjetas, etiquetas, pancartas y adhesivos",
    "package.smart.feature3": "Marca de agua y versión para adhesivo, con el logo centrado",
    "package.smart.recommendation":
      "Perfecto para quienes quieren imprimir su logo en regalos, papelería y difundirlo en varios canales.",

    // Package PRO BRAND
    "package.pro.name": "PRO BRAND",
    "package.pro.description":
      "JPG + PNG + PDF (IMPRESIONES, ADHESIVO, DOCUMENTOS) + PALETA DE COLORES Y TIPOGRAFÍA + IDENTIDAD VISUAL",
    "package.pro.price": "€79,99",
    "package.pro.originalPrice": "€97,99",
    "package.pro.feature1": "JPG, PNG y PDF (impresión, adhesivo, documentos)",
    "package.pro.feature2": "Paleta de colores personalizada con códigos HEX",
    "package.pro.feature3": "Tipografía recomendada para publicaciones y artes",
    "package.pro.feature4": "Identidad visual completa para Instagram, envases y materiales",
    "package.pro.recommendation": "Ideal para marcas que quieren consistencia e impacto visual desde el inicio.",

    // Package PREMIUM FULL
    "package.premium.name": "PREMIUM FULL",
    "package.premium.description":
      "JPG + PNG + PDF (IMPRESIONES, ADHESIVO, DOCUMENTOS) + PSD EDITABLE + IDENTIDAD VISUAL + MANUAL COMPLETO + TIPOGRAFÍA + MOCKUPS",
    "package.premium.price": "€109,99",
    "package.premium.originalPrice": "€149,99",
    "package.premium.feature1": "JPG, PNG y PDF para todos los usos",
    "package.premium.feature2": "PSD editable en Photoshop",
    "package.premium.feature3": "Identidad visual con colores, fuentes y estilo definidos",
    "package.premium.feature4": "Manual de marca: aplicación, área de seguridad, tamaños mínimos",
    "package.premium.feature5": "Tipografía profesional",
    "package.premium.feature6": "Mockups en camiseta, fachada, tarjeta y más",
    "package.premium.recommendation":
      "Paquete hecho para marcas que quieren escalar, atraer público y presentar una imagen profesional impecable.",

    // How it works
    "process.title": "CÓMO FUNCIONA",
    "process.subtitle": "Proceso simple en 3 pasos",
    "process.step1.title": "1. Elige el Paquete",
    "process.step1.desc": "Selecciona la opción que mejor se adapte a tus necesidades",
    "process.step2.title": "2. Completa la Información",
    "process.step2.desc": "Cuéntanos sobre tu empresa y preferencias de diseño",
    "process.step3.title": "3. Recibe tu Logo",
    "process.step3.desc": "Entrega en 24 horas",

    // FAQ
    "faq.title": "PREGUNTAS FRECUENTES",
    "faq.q1": "¿Cuánto tarda la entrega?",
    "faq.a1":
      "El plazo de entrega depende del paquete seleccionado, pero normalmente recibirás tu logo profesional entre 24 y 48 horas tras la confirmación de los datos de tu pedido.",
    "faq.q2": "¿Puedo pedir revisiones?",
    "faq.a2":
      "¡Sí! Puedes pedir ajustes o revisiones en tu logo hasta quedar completamente satisfecho con el resultado final.",
    "faq.q3": "¿En qué formatos lo recibo?",
    "faq.a3":
      "Recibirás el logo en formatos JPG y PNG en alta resolución. Los paquetes avanzados también incluyen PDF, PSD editable, marca de agua y mockups listos.",
    "faq.q4": "¿Hay garantía de satisfacción?",
    "faq.a4":
      "Sí, garantizamos el 100% de satisfacción o te devolvemos el dinero hasta 7 días después de la entrega, sin complicaciones.",
    "faq.q5": "¿Será exclusivo?",
    "faq.a5":
      "Sí, todos los logos son creados de manera única y exclusiva para cada cliente, sin utilizar plantillas ni copiar otros diseños.",

    // Guarantees
    "guarantees.title": "NUESTRAS GARANTÍAS",
    "guarantees.satisfaction.title": "Garantía de Satisfacción",
    "guarantees.satisfaction.desc": "devolución del 100 % si no quedas satisfecho",
    "guarantees.delivery.title": "Entrega Rápida",
    "guarantees.delivery.desc": "en 24 h",
    "guarantees.support.title": "Soporte Personalizado",
    "guarantees.support.desc": "atención continua",
    "guarantees.usage.title": "Uso Ilimitado",
    "guarantees.usage.desc": "web, impresión, redes",

    // Footer
    "footer.rights": "© 2024 LogoPro. Todos los derechos reservados.",
    "footer.terms": "Términos de Uso",
    "footer.privacy": "Política de Privacidad",
    "footer.secure": "Sitio Seguro",

    // Checkout
    "checkout.back": "← Volver a los Paquetes",
    "checkout.included": "Incluido en el paquete:",
    "checkout.original": "Precio original ya con descuento aplicado",
    "checkout.special": "OFERTA ESPECIAL DEL SITIO",
    "checkout.buy": "Compra ahora en la web y recibe",
    "checkout.free": "€10 GRATIS",
    "checkout.only": "Tu logo por solo",
    "checkout.how": "Cómo funciona:",
    "checkout.step1": "Pago adelantado seguro",
    "checkout.step2": "Tras la confirmación, recopilación de información",
    "checkout.step3": "Creación de tu logo personalizado",
    "checkout.step4": "Entrega según el paquete elegido",
    "checkout.pay": "PAGAR AHORA",
    "checkout.social": "O paga a través de las redes sociales",
    "checkout.contact": "Habla con nosotros directamente y envía la información por ahí",
    "checkout.whatsapp": "Paga a través de WhatsApp",
    "checkout.instagram": "Paga a través de Instagram",
    "checkout.facebook": "Paga a través de Facebook",
    "checkout.personalized": "💬 Atención personalizada",
    "checkout.fast": "⚡ Respuesta rápida garantizada",
    "checkout.preferences": "🎨 Envía tus preferencias directamente",

    // Thank You Page
    "thankyou.title": "Haz clic ahora en el botón para confirmar tu pedido y activar automáticamente tu recompensa exclusiva",
    "thankyou.back": "Volver a la página principal",
  },
  fr: {
    // Header Stats
    "header.clients": "+2.500 clients satisfaits",
    "header.rating": "4,9/5 Évaluation",
    "header.experience": "+5 ans d'expérience",

    // Hero Section
    "hero.title":
      "Investissez dans la qualité et la stratégie. Transformez votre identité visuelle avec un designer professionnel spécialisé dans la création de logos qui donnent réellement des résultats.",
    "hero.delivery": "Livraison Rapide",
    "hero.immediate": "Démarrage Immédiat",
    "hero.guarantee": "Garantie Totale",
    "hero.testimonials": "VOYEZ CE QUE DISENT NOS CLIENTS :",

    // Testimonial
    "testimonial.text":
      "« Le meilleur investissement que j'aie fait pour mon entreprise. Logo professionnel à un prix juste »",
    "testimonial.author": "João Santos",
    "testimonial.company": "Tech Solutions",

    // Logo Gallery
    "gallery.title": "LOGOS LIVRÉS AVEC SUCCÈS",
    "gallery.subtitle": "Découvrez des exemples de logos professionnels en versions 2D et 3D",

    // Packages
    "packages.title": "CHOISISSEZ VOTRE FORFAIT",
    "packages.subtitle": "Solutions professionnelles pour chaque besoin",
    "packages.select": "Sélectionnez le forfait",
    "packages.popular": "LE PLUS POPULAIRE",

    // Package IA START
    "package.ia.name": "IA START",
    "package.ia.description": "LOGO PAR IA, JPG ET PNG HAUTE RÉSOLUTION (WATERMARK EN PNG)",
    "package.ia.price": "34,99 €",
    "package.ia.originalPrice": "49,99 €",
    "package.ia.feature1": "Logo généré par IA personnalisé selon vos préférences",
    "package.ia.feature2": "Fichier JPG haute résolution, idéal pour réseaux sociaux, présentations et usage digital",
    "package.ia.feature3": "Fichier PNG fond transparent, prêt à l'emploi",
    "package.ia.feature4": "Watermark en PNG pour protéger votre création",
    "package.ia.feature5": "Livraison rapide par e-mail ou WhatsApp",
    "package.ia.recommendation":
      "Indiqué pour ceux qui ont besoin d'un logo rapide, de bonne qualité, prêt à commencer la promotion.",

    // Package DESIGN SMART
    "package.smart.name": "DESIGN SMART",
    "package.smart.description": "JPG + PNG + PDF (IMPRIMÉS, WATERMARK, AUTOCOLLANT)",
    "package.smart.price": "49,99 €",
    "package.smart.originalPrice": "69,99 €",
    "package.smart.feature1": "JPG et PNG haute résolution",
    "package.smart.feature2": "PDF professionnel pour impression de cartes, étiquettes, bannières et autocollants",
    "package.smart.feature3": "Watermark et version autocollant avec logo centré",
    "package.smart.recommendation":
      "Parfait pour ceux qui veulent imprimer le logo sur des cadeaux, de la papeterie et le promouvoir sur différents canaux.",

    // Package PRO BRAND
    "package.pro.name": "PRO BRAND",
    "package.pro.description":
      "JPG + PNG + PDF (IMPRIMÉS, AUTOCOLLANT, DOCUMENTS) + PALETTE DE COULEURS ET TYPOGRAPHIE + IDENTITÉ VISUELLE",
    "package.pro.price": "79,99 €",
    "package.pro.originalPrice": "97,99 €",
    "package.pro.feature1": "JPG, PNG et PDF (impression, autocollant, documents)",
    "package.pro.feature2": "Palette de couleurs personnalisée (codes HEX)",
    "package.pro.feature3": "Typographie recommandée pour posts et créations",
    "package.pro.feature4": "Identité visuelle complète pour Instagram, packaging et supports",
    "package.pro.recommendation":
      "Idéal pour les marques qui veulent de la cohérence et un impact visuel dès le début.",

    // Package PREMIUM FULL
    "package.premium.name": "PREMIUM FULL",
    "package.premium.description":
      "JPG + PNG + PDF (IMPRIMÉS, AUTOCOLLANT, DOCUMENTS) + PSD ÉDITABLE + IDENTITÉ VISUELLE + MANUEL COMPLET + TYPOGRAPHIE + MOCKUPS",
    "package.premium.price": "109,99 €",
    "package.premium.originalPrice": "149,99 €",
    "package.premium.feature1": "JPG, PNG et PDF pour tous supports",
    "package.premium.feature2": "PSD original éditable sous Photoshop",
    "package.premium.feature3": "Identité visuelle détaillée (couleurs, polices, style)",
    "package.premium.feature4": "Manuel de marque (zones de sécurité, tailles minimales)",
    "package.premium.feature5": "Typographie professionnelle",
    "package.premium.feature6": "Mockups sur t-shirt, façade, carte et plus",
    "package.premium.recommendation":
      "Forfait fait pour les marques qui veulent évoluer, attirer le public et présenter une image professionnelle impeccable.",

    // How it works
    "process.title": "COMMENT ÇA FONCTIONNE",
    "process.subtitle": "Processus simple en 3 étapes",
    "process.step1.title": "1. Choisissez votre forfait",
    "process.step1.desc": "Sélectionnez l'option qui répond le mieux à vos besoins",
    "process.step2.title": "2. Remplissez les informations",
    "process.step2.desc": "Parlez-nous de votre entreprise et de vos préférences de design",
    "process.step3.title": "3. Recevez votre logo",
    "process.step3.desc": "Livraison sous 24 h",

    // FAQ
    "faq.title": "QUESTIONS FRÉQUENTES",
    "faq.q1": "Quel est le délai de livraison ?",
    "faq.a1":
      "Le délai dépend du forfait choisi, mais en général, vous recevrez votre logo professionnel sous 24 à 48 heures après la confirmation de votre commande.",
    "faq.q2": "Puis-je demander des révisions ?",
    "faq.a2":
      "Oui ! Vous pouvez demander des ajustements ou révisions sur votre logo jusqu'à être entièrement satisfait du résultat final.",
    "faq.q3": "Quels formats de fichiers ?",
    "faq.a3":
      "Vous recevrez le logo aux formats JPG et PNG haute définition. Les forfaits avancés incluent également PDF, PSD modifiable, filigrane et maquettes prêtes à l'emploi.",
    "faq.q4": "Y a-t-il une garantie ?",
    "faq.a4":
      "Oui, nous garantissons 100% de satisfaction ou remboursement sous 7 jours après la livraison, sans formalités.",
    "faq.q5": "Le logo est-il exclusif ?",
    "faq.a5":
      "Oui, chaque logo est conçu de manière unique et exclusive pour chaque client, sans utilisation de modèles ou copies.",

    // Guarantees
    "guarantees.title": "NOS GARANTIES",
    "guarantees.satisfaction.title": "Satisfaction garantie",
    "guarantees.satisfaction.desc": "remboursement intégral si insatisfaction",
    "guarantees.delivery.title": "Livraison rapide",
    "guarantees.delivery.desc": "en 24 h",
    "guarantees.support.title": "Support dédié",
    "guarantees.support.desc": "assistance personnalisée",
    "guarantees.usage.title": "Usage illimité",
    "guarantees.usage.desc": "web, impression, réseaux sociaux",

    // Footer
    "footer.rights": "© 2024 LogoPro. Tous droits réservés.",
    "footer.terms": "Conditions d'Utilisation",
    "footer.privacy": "Politique de Confidentialité",
    "footer.secure": "Site Sécurisé",

    // Checkout
    "checkout.back": "← Retour aux Forfaits",
    "checkout.included": "Inclus dans le forfait :",
    "checkout.original": "Prix original déjà remisé",
    "checkout.special": "OFFRE SPÉCIALE DU SITE",
    "checkout.buy": "Achetez maintenant sur le site et recevez",
    "checkout.free": "10 € OFFERTS",
    "checkout.only": "Votre logo pour seulement",
    "checkout.how": "Comment ça marche :",
    "checkout.step1": "Paiement anticipé sécurisé",
    "checkout.step2": "Après confirmation, collecte des informations",
    "checkout.step3": "Création de votre logo personnalisé",
    "checkout.step4": "Livraison selon le forfait choisi",
    "checkout.pay": "PAYER MAINTENANT",
    "checkout.social": "Ou payez via les réseaux sociaux",
    "checkout.contact": "Parlez-nous directement et transmettez les informations par là",
    "checkout.whatsapp": "Payez via WhatsApp",
    "checkout.instagram": "Payez via Instagram",
    "checkout.facebook": "Payez via Facebook",
    "checkout.personalized": "💬 Service personnalisé",
    "checkout.fast": "⚡ Réponse rapide garantie",
    "checkout.preferences": "🎨 Transmettez vos préférences directement",

    // Thank You Page
    "thankyou.title": "Cliquez maintenant sur le bouton pour confirmer votre commande et activer automatiquement votre récompense exclusive",
    "thankyou.back": "Retour à la page d'accueil",
  },
  it: {
    // Header Stats
    "header.clients": "+2.500 Clienti Soddisfatti",
    "header.rating": "4,9/5 Valutazione",
    "header.experience": "+5 anni di esperienza",

    // Hero Section
    "hero.title":
      "Investi in qualità e strategia. Trasforma la tua identità visiva con un designer professionista specializzato nella creazione di loghi che ottengono risultati concreti.",
    "hero.delivery": "Consegna Veloce",
    "hero.immediate": "Avvio Immediato",
    "hero.guarantee": "Garanzia Totale",
    "hero.testimonials": "GUARDA COSA DICONO I NOSTRI CLIENTI:",

    // Testimonial
    "testimonial.text":
      "Il miglior investimento che abbia fatto per la mia azienda. Logo professionale a un prezzo giusto!",
    "testimonial.author": "João Santos",
    "testimonial.company": "Tech Solutions",

    // Logo Gallery
    "gallery.title": "LOGHI CONSEGNATI CON SUCCESSO",
    "gallery.subtitle": "Esempi di loghi professionali in 2D e 3D",

    // Packages
    "packages.title": "SCEGLI IL TUO PACCHETTO",
    "packages.subtitle": "Soluzioni professionali per ogni esigenza",
    "packages.select": "Seleziona pacchetto",
    "packages.popular": "IL PIÙ POPOLARE",

    // Package IA START
    "package.ia.name": "IA START",
    "package.ia.description": "LOGO GENERATO DA IA, JPG E PNG AD ALTA RISOLUZIONE (WATERMARK IN PNG)",
    "package.ia.price": "€34,99",
    "package.ia.originalPrice": "€49,99",
    "package.ia.feature1": "Logo creato da IA personalizzato sulle tue preferenze",
    "package.ia.feature2": "File JPG ad alta risoluzione per social, presentazioni e digitale",
    "package.ia.feature3": "File PNG con sfondo trasparente pronto all'uso",
    "package.ia.feature4": "Watermark in PNG per proteggere il tuo design",
    "package.ia.feature5": "Consegna rapida via email o WhatsApp",
    "package.ia.recommendation":
      "Indicato per chi ha bisogno di un logo veloce, di buona qualità, pronto per iniziare a promuovere.",

    // Package DESIGN SMART
    "package.smart.name": "DESIGN SMART",
    "package.smart.description": "JPG + PNG + PDF (STAMPE, WATERMARK, ADESIVO)",
    "package.smart.price": "€49,99",
    "package.smart.originalPrice": "€69,99",
    "package.smart.feature1": "JPG e PNG ad alta risoluzione",
    "package.smart.feature2": "PDF professionale per biglietti, etichette, banner e adesivi",
    "package.smart.feature3": "Watermark e versione adesivo con logo centrato",
    "package.smart.recommendation":
      "Ideale per stampare il logo su gadget, cancelleria e promuoverlo su diversi canali.",

    // Package PRO BRAND
    "package.pro.name": "PRO BRAND",
    "package.pro.description":
      "JPG + PNG + PDF (STAMPE, ADESIVO, DOCUMENTI) + PALETTA COLORI E TIPOGRAFIA + IDENTITÀ VISIVA",
    "package.pro.price": "€79,99",
    "package.pro.originalPrice": "€97,99",
    "package.pro.feature1": "JPG, PNG e PDF per stampa, adesivi e documenti",
    "package.pro.feature2": "Paletta colori personalizzata (codici HEX)",
    "package.pro.feature3": "Tipografia consigliata per post e grafiche",
    "package.pro.feature4": "Identità visiva completa per Instagram, packaging e materiali",
    "package.pro.recommendation": "Ideale per marchi che vogliono coerenza e impatto visivo fin dall'inizio.",

    // Package PREMIUM FULL
    "package.premium.name": "PREMIUM FULL",
    "package.premium.description":
      "JPG + PNG + PDF (STAMPE, ADESIVO, DOCUMENTI) + PSD EDITABILE + IDENTITÀ VISIVA + MANUALE COMPLETO + TIPOGRAFIA + MOCKUPS",
    "package.premium.price": "€109,99",
    "package.premium.originalPrice": "€149,99",
    "package.premium.feature1": "JPG, PNG e PDF per ogni supporto",
    "package.premium.feature2": "PSD originale modificabile in Photoshop",
    "package.premium.feature3": "Identità visiva dettagliata: colori, font, stile",
    "package.premium.feature4": "Manuale d'uso del logo: zone di sicurezza, dimensioni minime",
    "package.premium.feature5": "Tipografia professionale",
    "package.premium.feature6": "Mockups su t-shirt, insegna, biglietto e altro",
    "package.premium.recommendation":
      "Pacchetto fatto per marchi che vogliono scalare, attrarre pubblico e presentare un'immagine professionale impeccabile.",

    // How it works
    "process.title": "COME FUNZIONA",
    "process.subtitle": "Procedura in 3 semplici passi",
    "process.step1.title": "1. Scegli il pacchetto",
    "process.step1.desc": "Seleziona l'opzione che meglio si adatta alle tue esigenze",
    "process.step2.title": "2. Compila le informazioni",
    "process.step2.desc": "Raccontaci della tua azienda e delle preferenze di design",
    "process.step3.title": "3. Ricevi il tuo logo",
    "process.step3.desc": "Consegna entro 24 h",

    // FAQ
    "faq.title": "DOMANDE FREQUENTI",
    "faq.q1": "Quanto tempo ci vuole per la consegna?",
    "faq.a1":
      "Il tempo di consegna dipende dal pacchetto scelto, ma in genere riceverai il tuo logo professionale tra 24 e 48 ore dopo la conferma delle informazioni dell'ordine.",
    "faq.q2": "Posso richiedere revisioni?",
    "faq.a2":
      "Sì! Puoi richiedere modifiche o revisioni al tuo logo finché non sarai completamente soddisfatto del risultato finale.",
    "faq.q3": "In quali formati ricevo il logo?",
    "faq.a3":
      "Riceverai il logo nei formati JPG e PNG ad alta risoluzione. I pacchetti avanzati includono anche PDF, file PSD modificabile, filigrana e mockup pronti.",
    "faq.q4": "C'è garanzia di soddisfazione?",
    "faq.a4": "Sì, garantiamo il 100% di soddisfazione o rimborso entro 7 giorni dalla consegna, senza complicazioni.",
    "faq.q5": "Il logo sarà esclusivo?",
    "faq.a5":
      "Sì, tutti i loghi sono creati in modo unico ed esclusivo per ogni cliente, senza utilizzare modelli predefiniti o copiare altri design.",

    // Guarantees
    "guarantees.title": "LE NOSTRE GARANZIE",
    "guarantees.satisfaction.title": "Soddisfazione garantita",
    "guarantees.satisfaction.desc": "rimborso totale se non soddisfatto",
    "guarantees.delivery.title": "Consegna rapida",
    "guarantees.delivery.desc": "entro 24 h",
    "guarantees.support.title": "Supporto dedicato",
    "guarantees.support.desc": "assistenza personalizzata",
    "guarantees.usage.title": "Uso illimitato",
    "guarantees.usage.desc": "web, stampa, social",

    // Footer
    "footer.rights": "© 2024 LogoPro. Tutti i diritti riservati.",
    "footer.terms": "Termini di Utilizzo",
    "footer.privacy": "Informativa sulla Privacy",
    "footer.secure": "Sito Sicuro",

    // Checkout
    "checkout.back": "← Torna ai Pacchetti",
    "checkout.included": "Incluso nel pacchetto:",
    "checkout.original": "Prezzo originale già scontato",
    "checkout.special": "OFFERTA SPECIALE DEL SITO",
    "checkout.buy": "Acquista ora dal sito e ricevi",
    "checkout.free": "€10 IN OMAGGIO",
    "checkout.only": "Il tuo logo a soli",
    "checkout.how": "Come funziona:",
    "checkout.step1": "Pagamento anticipato sicuro",
    "checkout.step2": "Dopo la conferma, raccolta delle informazioni",
    "checkout.step3": "Creazione del logo personalizzato",
    "checkout.step4": "Consegna secondo il pacchetto scelto",
    "checkout.pay": "PAGA ORA",
    "checkout.social": "Oppure paga tramite i social network",
    "checkout.contact": "Parlaci direttamente e invia le informazioni da lì",
    "checkout.whatsapp": "Paga tramite WhatsApp",
    "checkout.instagram": "Paga tramite Instagram",
    "checkout.facebook": "Paga tramite Facebook",
    "checkout.personalized": "💬 Assistenza personalizzata",
    "checkout.fast": "⚡ Risposta rapida garantita",
    "checkout.preferences": "🎨 Invia direttamente le tue preferenze",

    // Thank You Page
    "thankyou.title": "Clicca ora sul pulsante per confermare il tuo ordine e attivare automaticamente la tua ricompensa esclusiva",
    "thankyou.back": "Torna alla pagina principale",
  },
  de: {
    // Header Stats
    "header.clients": "+2.500 zufriedene Kunden",
    "header.rating": "4,9/5 Bewertung",
    "header.experience": "+5 Jahre Erfahrung",

    // Hero Section
    "hero.title":
      "Investieren Sie in Qualität und Strategie. Verwandeln Sie Ihre visuelle Identität mit einem professionellen Designer, der Logos erstellt, die wirklich Ergebnisse liefern.",
    "hero.delivery": "Schnelle Lieferung",
    "hero.immediate": "Sofortiger Start",
    "hero.guarantee": "Volle Garantie",
    "hero.testimonials": "SEHEN SIE, WAS UNSERE KUNDEN SAGEN:",

    // Testimonial
    "testimonial.text": '„Die beste Investition für mein Unternehmen. Professionelles Logo zu einem fairen Preis!"',
    "testimonial.author": "João Santos",
    "testimonial.company": "Tech Solutions",

    // Logo Gallery
    "gallery.title": "ERFOLGREICH GELIEFERTEN LOGOS",
    "gallery.subtitle": "Beispiele professioneller Logos in 2D- und 3D-Versionen",

    // Packages
    "packages.title": "WÄHLEN SIE IHR PAKET",
    "packages.subtitle": "Professionelle Lösungen für jeden Bedarf",
    "packages.select": "Paket auswählen",
    "packages.popular": "AM BELIEBTESTEN",

    // Package IA START
    "package.ia.name": "IA START",
    "package.ia.description": "LOGO VON DER KI, JPG UND PNG IN HOHER AUFLÖSUNG (WASSERZEICHEN ALS PNG)",
    "package.ia.price": "34,99 €",
    "package.ia.originalPrice": "49,99 €",
    "package.ia.feature1": "KI-generiertes Logo, personalisiert nach Ihren Wünschen",
    "package.ia.feature2": "JPG-Datei in hoher Auflösung für Social Media, Präsentationen und digitale Nutzung",
    "package.ia.feature3": "PNG mit transparentem Hintergrund, sofort einsetzbar",
    "package.ia.feature4": "Wasserzeichen als PNG zum Schutz Ihres Designs",
    "package.ia.feature5": "Schnelle Lieferung per E-Mail oder WhatsApp",
    "package.ia.recommendation":
      "Ideal für alle, die ein schnelles Logo mit guter Qualität benötigen, bereit für die Werbung.",

    // Package DESIGN SMART
    "package.smart.name": "DESIGN SMART",
    "package.smart.description": "JPG + PNG + PDF (DRUCKE, WASSERZEICHEN, AUFKLEBER)",
    "package.smart.price": "49,99 €",
    "package.smart.originalPrice": "69,99 €",
    "package.smart.feature1": "JPG und PNG in hoher Auflösung",
    "package.smart.feature2": "Professionelles PDF für Karten, Etiketten, Banner und Aufkleber",
    "package.smart.feature3": "Wasserzeichen und Aufkleber-Version mit zentriertem Logo",
    "package.smart.recommendation":
      "Perfekt für alle, die ihr Logo auf Werbegeschenken, Büromaterial oder in verschiedenen Kanälen drucken möchten.",

    // Package PRO BRAND
    "package.pro.name": "PRO BRAND",
    "package.pro.description":
      "JPG + PNG + PDF (DRUCKE, AUFKLEBER, DOKUMENTE) + FARBPALETTE UND TYPOGRAFIE + VISUELLE IDENTITÄT",
    "package.pro.price": "79,99 €",
    "package.pro.originalPrice": "97,99 €",
    "package.pro.feature1": "JPG, PNG und PDF (Druck, Aufkleber, Dokumente)",
    "package.pro.feature2": "Individuelle Farbpalette (HEX-Codes)",
    "package.pro.feature3": "Empfohlene Typografie für Posts und Grafiken",
    "package.pro.feature4": "Visuelle Identität für Instagram, Verpackung und Materialien",
    "package.pro.recommendation": "Ideal für Marken, die Konsistenz und visuellen Einfluss von Anfang an wollen.",

    // Package PREMIUM FULL
    "package.premium.name": "PREMIUM FULL",
    "package.premium.description":
      "JPG + PNG + PDF (DRUCKE, AUFKLEBER, DOKUMENTE) + BEARBEITBARE PSD + VISUELLE IDENTITÄT + KOMPLETTES HANDBUCH + TYPOGRAFIE + MOCKUPS",
    "package.premium.price": "109,99 €",
    "package.premium.originalPrice": "149,99 €",
    "package.premium.feature1": "JPG, PNG und PDF für alle Anwendungen",
    "package.premium.feature2": "Original-PSD für Photoshop-Bearbeitung",
    "package.premium.feature3": "Ausführliche visuelle Identität: Farben, Schriften, Stil",
    "package.premium.feature4": "Markenhandbuch: Sicherheitsabstände, Mindestgrößen",
    "package.premium.feature5": "Professionelle Typografie",
    "package.premium.feature6": "Mockups auf T-Shirt, Fassade, Karte etc.",
    "package.premium.recommendation":
      "Paket für Marken, die skalieren, Publikum anziehen und ein tadelloses professionelles Image präsentieren wollen.",

    // How it works
    "process.title": "SO FUNKTIONIERT'S",
    "process.subtitle": "Einfacher 3-Schritte-Prozess",
    "process.step1.title": "1. Paket wählen",
    "process.step1.desc": "Wählen Sie die Option, die Ihren Bedürfnissen am besten entspricht",
    "process.step2.title": "2. Informationen angeben",
    "process.step2.desc": "Erzählen Sie uns von Ihrem Unternehmen und Ihren Design-Präferenzen",
    "process.step3.title": "3. Logo erhalten",
    "process.step3.desc": "Lieferung innerhalb von 24 h",

    // FAQ
    "faq.title": "HÄUFIG GESTELLTE FRAGEN",
    "faq.q1": "Wie lange dauert die Lieferung meines Logos?",
    "faq.a1":
      "Die Lieferzeit hängt vom gewählten Paket ab, aber normalerweise erhalten Sie Ihr professionelles Logo innerhalb von 24 bis 48 Stunden nach Bestätigung Ihrer Bestellinformationen.",
    "faq.q2": "Kann ich Überarbeitungen anfordern?",
    "faq.a2":
      "Ja! Sie können Anpassungen oder Überarbeitungen Ihres Logos anfordern, bis Sie mit dem Endergebnis vollkommen zufrieden sind.",
    "faq.q3": "In welchen Formaten erhalte ich die Datei?",
    "faq.a3":
      "Sie erhalten das Logo in den Formaten JPG und PNG in hoher Auflösung. Erweiterte Pakete enthalten auch PDF, bearbeitbare PSD, Wasserzeichen und fertige Mockups.",
    "faq.q4": "Gibt es eine Zufriedenheitsgarantie?",
    "faq.a4":
      "Ja, wir garantieren 100% Zufriedenheit oder erstatten Ihnen Ihr Geld innerhalb von 7 Tagen nach Lieferung ohne Bürokratie.",
    "faq.q5": "Wird das Logo exklusiv sein?",
    "faq.a5":
      "Ja, alle Logos werden einzigartig und exklusiv für jeden Kunden entwickelt, ohne Verwendung von vorgefertigten Vorlagen oder Kopien.",

    // Guarantees
    "guarantees.title": "UNSERE GARANTIEN",
    "guarantees.satisfaction.title": "Zufriedenheitsgarantie",
    "guarantees.satisfaction.desc": "100% Geld zurück, wenn Sie nicht zufrieden sind",
    "guarantees.delivery.title": "Schnelle Lieferung",
    "guarantees.delivery.desc": "Lieferung innerhalb von 24 Stunden",
    "guarantees.support.title": "Persönlicher Support",
    "guarantees.support.desc": "Engagierter Support während des gesamten Prozesses",
    "guarantees.usage.title": "Unbegrenzte Nutzung",
    "guarantees.usage.desc": "Für Web, Druck, soziale Medien",

    // Footer
    "footer.rights": "© 2024 LogoPro. Alle Rechte vorbehalten.",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzbestimmungen",
    "footer.secure": "Sichere Seite",

    // Checkout
    "checkout.back": "← Zurück zu den Paketen",
    "checkout.included": "Im Paket enthalten:",
    "checkout.original": "Originalpreis mit bereits angewendetem Rabatt",
    "checkout.special": "BESONDERES WEBSITE-ANGEBOT",
    "checkout.buy": "Kaufen Sie jetzt über die Website und erhalten Sie",
    "checkout.free": "10 € GRATIS",
    "checkout.only": "Ihr Logo für nur",
    "checkout.how": "So funktioniert es:",
    "checkout.step1": "Sichere Vorauszahlung",
    "checkout.step2": "Nach Bestätigung Erfassung der Informationen",
    "checkout.step3": "Erstellung Ihres individuellen Logos",
    "checkout.step4": "Lieferung gemäß gewähltem Paket",
    "checkout.pay": "JETZT BEZAHLEN",
    "checkout.social": "Oder bezahlen Sie über soziale Netzwerke",
    "checkout.contact": "Sprechen Sie uns direkt an und geben Sie die Informationen dort weiter",
    "checkout.whatsapp": "Bezahlen Sie über WhatsApp",
    "checkout.instagram": "Bezahlen Sie über Instagram",
    "checkout.facebook": "Bezahlen Sie über Facebook",
    "checkout.personalized": "💬 Persönliche Betreuung",
    "checkout.fast": "⚡ Garantierte schnelle Antwort",
    "checkout.preferences": "🎨 Geben Sie Ihre Präferenzen direkt an",

    // Thank You Page
    "thankyou.title": "Klicken Sie jetzt auf die Schaltfläche, um Ihre Bestellung zu bestätigen und Ihre exklusive Belohnung automatisch zu aktivieren",
    "thankyou.back": "Zurück zur Hauptseite",
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: keyof typeof translations["pt"]): string => {
    // Garante que a chave existe no objeto de traduções para o idioma atual
    const langTranslations = translations[language] as Record<string, string>
    return langTranslations[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key: string) => t(key as keyof typeof translations["pt"]) }}>
      {children}
      </LanguageContext.Provider>
  )}
