import React, { useState } from "react";

export default function SearchMusic() {
  const [query, setQuery] = useState(""); // Armazenar o termo de pesquisa
  const [musics, setMusics] = useState<any[]>([]); // Armazenar as músicas encontradas
  const [loading, setLoading] = useState(false); // Controlar o estado de carregamento

  // Função para lidar com a mudança no campo de pesquisa
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // Função para buscar músicas da API
  const searchMusic = async () => {
    if (!query.trim()) return; // Evita a busca se o campo estiver vazio

    setLoading(true);
    try {
      // Usando a API do Spotify como exemplo
      const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
        headers: {
          Authorization: `Bearer YOUR_SPOTIFY_ACCESS_TOKEN`, // Substitua com seu token
        },
      });

      const data = await response.json();
      setMusics(data.tracks.items); // Armazena as músicas encontradas
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <div className="flex space-x-2">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && searchMusic()} // Faz a busca ao apertar Enter
          placeholder="Digite o nome da música"
          className="p-2 w-full rounded-md bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={searchMusic}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-md"
        >
          Buscar
        </button>
      </div>

      {loading ? (
        <div className="mt-4 text-center">Carregando...</div>
      ) : (
        <div className="mt-4">
          {musics.length === 0 ? (
            <div className="text-center">Nenhuma música encontrada.</div>
          ) : (
            <ul className="space-y-2">
              {musics.map((music, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <img
                    src={music.album.images[0].url}
                    alt={music.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{music.name}</p>
                    <p className="text-sm text-gray-400">{music.artists.map((artist: any) => artist.name).join(", ")}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
