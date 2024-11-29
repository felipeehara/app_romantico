"use client"
import React, { useState } from "react";

export default function InputTextMensagem() {
  const [texto, setTexto] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexto(e.target.value);
  };

  return (
    <div className="relative">
      <form>
        <textarea
          value={texto}
          onChange={handleChange}
          maxLength={500}
          rows={6}
          className="mx-8 p-3 pr-12 rounded-lg bg-gray-700 text-red-500 w-80 resize-none"
          placeholder="Ex: João, você é a pessoa mais incrível que já conheci. Obrigado por tudo!"
        />
      </form>
      <div className="absolute bottom-2 right-3 text-sm text-gray-400 mr-5">
        {texto.length} / 500
      </div>
    </div>
  );
}
