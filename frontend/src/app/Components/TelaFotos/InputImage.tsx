import React, { useState } from "react";

export default function InputImage() {
  const [images, setImages] = useState<File[]>([]);

  // Função para lidar com a seleção das imagens
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files);
      if (newImages.length + images.length <= 8) {
        setImages((prevImages) => [...prevImages, ...newImages]);
      } else {
        alert("Você pode anexar no máximo 8 imagens.");
      }
    }
  };

  // Função para remover uma imagem
  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label
        htmlFor="image-upload"
        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700"
      >
        Anexar imagens
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Exibe as imagens anexadas */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-24 h-24">
            <img
              src={URL.createObjectURL(image)}
              alt={`Imagem ${index + 1}`}
              className="object-cover w-full h-full rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Mensagem de limite de imagens */}
      {images.length === 8 && (
        <p className="text-sm text-red-500 mt-2">Você atingiu o limite de 8 imagens.</p>
      )}
    </div>
  );
}
