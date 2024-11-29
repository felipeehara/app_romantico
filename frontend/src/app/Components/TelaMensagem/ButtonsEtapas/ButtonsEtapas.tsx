import Link from "next/link";
import React from "react";

interface ButtonEtapasProps {
  link: string; // URL para redirecionar o usuário
  content: string; // Conteúdo do botão
}

export default function ButtonEtapas({ link, content }: ButtonEtapasProps) {
  return (
    <div className="flex justify-center">
      <Link href={link}>
        <div className="inline-block px-6 py-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
          {content}
        </div>
      </Link>
    </div>
  );
}
