import React from "react";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Pagamento realizado com sucesso!</h1>
      <p className="text-lg text-gray-700 mb-8">Obrigado por sua compra. Seu pagamento foi processado com sucesso.</p>
      <a href="/" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Voltar para a página inicial</a>
    </div>
  );
} 