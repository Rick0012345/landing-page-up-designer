"use client"
import React from "react";
import { useLanguage } from "../../contexts/language-context";
import { LanguageSelector } from "../../components/language-selector";

export default function ThankYouPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <h1 className="text-4xl font-bold text-green-600 mb-4 text-center">
        {t("thankyou.title")}
      </h1>
      <a 
        href="/" 
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
      >
        {t("thankyou.back")}
      </a>
    </div>
  );
} 