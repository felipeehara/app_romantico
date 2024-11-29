"use client"
import React, { useState, useEffect } from "react";

export default function DatePicker() {
  // Estado para armazenar mês, ano e dias
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1); // Mês atual
  const [year, setYear] = useState<number>(new Date().getFullYear()); // Ano atual
  const [days, setDays] = useState<number[]>([]); // Dias do mês

  // Função para calcular os dias do mês selecionado
  const getDaysInMonth = (month: number, year: number): number[] => {
    const daysInMonth = new Date(year, month, 0).getDate(); // Retorna o número de dias no mês
    return Array.from({ length: daysInMonth }, (_, i) => i + 1); // Gera um array com os dias
  };

  // Atualiza os dias sempre que o mês ou ano mudar
  useEffect(() => {
    setDays(getDaysInMonth(month, year));
  }, [month, year]);

  return (
    <div className="flex flex-col items-center justify-center py-8 space-y-4 bg-gray-900 text-white rounded-lg shadow-xl p-6">
      {/* Select para o Mês */}
      <div className="flex space-x-4">
        <select
          value={month}
          onChange={(e) => setMonth(Number(e.target.value))}
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"].map((mes, index) => (
            <option key={index} value={index + 1}>
              {mes}
            </option>
          ))}
        </select>

        {/* Select para o Ano */}
        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="p-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Array.from({ length: 125 }, (_, i) => 1900 + i).map((ano) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      </div>

      {/* Exibição dos dias */}
      <div className="grid grid-cols-7 gap-2 mt-4">
        {days.map((day) => (
          <div
            key={day}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-md text-lg hover:bg-gray-700 cursor-pointer transition-all"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
