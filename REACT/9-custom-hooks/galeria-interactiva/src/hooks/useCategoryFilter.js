import { useState } from 'react';

// Hook para gestionar la categoría actual de filtrado de imágenes
export const useCategoryFilter = (initialCategory) => {
  const [category, setCategory] = useState(initialCategory);

  // Función para cambiar la categoría
  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return [category, changeCategory];
};
