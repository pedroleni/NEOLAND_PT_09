import React from "react"; // Importa React, necesario para utilizar JSX y componentes.
import { useCategoryFilter } from "./hooks/useCategoryFilter"; // Importa el hook personalizado useCategoryFilter.
import { useSearch } from "./hooks/useSearch"; // Importa el hook personalizado useSearch.

const App = () => {
  // Inicializa el estado de la categoría usando el hook useCategoryFilter con el valor inicial "todas".
  const [category, changeCategory] = useCategoryFilter("todas");

  // Inicializa el estado de la consulta de búsqueda usando el hook useSearch sin valor inicial.
  const [searchQuery, updateSearch] = useSearch();

  // Array que simula datos de imágenes, cada objeto representa una imagen con su URL y categoría.
  const images = [
    {
      src: "https://humanidades.com/wp-content/uploads/2017/03/ciudad-3-e1565900111723.jpg",
      category: "ciudad",
    },
    {
      src: "https://humanidades.com/wp-content/uploads/2017/03/ciudad-2-e1565898178792.jpg",
      category: "ciudad",
    },
    {
      src: "https://www.ecoavant.com/uploads/s1/28/20/69/imagen-de-que-es-la-naturaleza_5_640x307.webp",
      category: "naturaleza",
    },
    {
      src: "https://www.repsol.com/content/dam/repsol-complejos-industriales/cartagena/entorno-y-comunidad/bosque.jpg",
      category: "naturaleza",
    },
    // más imágenes aquí
  ];

  // Filtra el array de imágenes basándose en la categoría seleccionada y la consulta de búsqueda.
  // Se muestra cualquier imagen que coincida con la categoría seleccionada o que pertenezca a "todas" las categorías.
  // También verifica si el término de búsqueda está incluido en la URL de la imagen.
  const filteredImages = images.filter(
    (img) =>
      (img.category === category || category === "todas") &&
      img.src.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        onChange={(e) => updateSearch(e.target.value)} // Establece el valor del input como la nueva consulta de búsqueda al cambiar.
      />
      <select onChange={(e) => changeCategory(e.target.value)}>
        {" "}
        <option value="todas">Todas</option>
        <option value="naturaleza">Naturaleza</option>
        <option value="ciudad">Ciudad</option>
      </select>
      <div>
        {filteredImages.map(
          (
            img,
            index // Mapea las imágenes filtradas y las muestra en un elemento img.
          ) => (
            <img key={index} src={img.src} alt="Imagen de galería" /> // Utiliza el índice como key para cada elemento img.
          )
        )}
      </div>
    </div>
  );
};

export default App; // Exporta el componente App para ser utilizado en otros lugares del proyecto.
