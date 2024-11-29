"use client";
import React, { useState, useEffect } from "react";

export default function FraseAnimation() {
  const frases = [
    "Seu amor",
    "Seu amigo",
    "Seu familiar",
    "Alguém especial"
  ];

  const [fraseAtual, setFraseAtual] = useState("Seu"); // Parte fixa da frase
  const [palavraAtual, setPalavraAtual] = useState(""); // Palavra dinâmica
  const [indexFrase, setIndexFrase] = useState(0); // Índice da frase atual
  const [caractere, setCaractere] = useState(0); // Índice do caractere atual
  const [apagando, setApagando] = useState(false); // Controle do estado de apagamento

  useEffect(() => {
    const fraseCompleta = frases[indexFrase];
    const [parteFixa, parteDinamica] = fraseCompleta.split(" "); // Divide em parte fixa e parte dinâmica

    setFraseAtual(parteFixa); // Garante que a parte fixa sempre seja exibida

    const intervalo = setInterval(() => {
      if (!apagando) {
        // Adicionando caracteres (digitando)
        if (caractere < parteDinamica.length) {
          setPalavraAtual((prev) => prev + parteDinamica[caractere]); // Adiciona próximo caractere
          setCaractere((prev) => prev + 1);
        } else {
          // Espera antes de apagar
          setTimeout(() => setApagando(true), 1000);
          clearInterval(intervalo);
        }
      } else {
        // Apagando caracteres
        if (caractere > 0) {
          setPalavraAtual((prev) => prev.slice(0, -1)); // Remove o último caractere
          setCaractere((prev) => prev - 1);
        } else {
          // Troca para a próxima palavra
          setApagando(false);
          setIndexFrase((prev) => (prev + 1) % frases.length); // Próxima frase
          clearInterval(intervalo);
        }
      }
    }, 100); // Velocidade de digitação/apagamento (100ms por caractere)

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [caractere, apagando, indexFrase]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold text-white mb-4">Surpreenda</h1>
      <span className="text-xl text-red-600 font-mono border-r-2 border-gray-800 animate-blink">
        {fraseAtual} {palavraAtual}
      </span>
    </div>
  );
}
