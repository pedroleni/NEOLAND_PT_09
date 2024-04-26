import { useState } from 'react';

// Hook para gestionar la consulta de búsqueda
export const useSearch = () => {
  const [query, setQuery] = useState('');

  // Función para actualizar la consulta de búsqueda
  const updateSearch = (newQuery) => {
    setQuery(newQuery);
  };

  return [query, updateSearch];
};
