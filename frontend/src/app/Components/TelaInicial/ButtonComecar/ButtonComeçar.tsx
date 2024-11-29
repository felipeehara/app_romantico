import Link from "next/link";
import React from "react";

export default function ButtonComecar() {
  return (
    <div className="flex justify-center items-center">
      <Link
        href="/Pages/Mensagem"
        className="relative inline-block px-6 py-3 font-semibold text-white bg-transparent border-4 border-transparent rounded-full w-80 group overflow-hidden"
      >
        {/* Animação da borda */}
        <span className="absolute inset-0 w-full h-full border-4 border-red-600 rounded-full animate-border-loop"></span>
        {/* Texto do botão */}
        <span className="relative z-10">Começar &gt;</span>
      </Link>
    </div>
  );
}
