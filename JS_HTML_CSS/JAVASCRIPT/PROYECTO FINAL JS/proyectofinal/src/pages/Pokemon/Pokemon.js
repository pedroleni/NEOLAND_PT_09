import { PrintFigurePokemon } from "../../components";
import { getDataPokemonBucle } from "../../utils";
import "./Pokemon.css";

const template = () =>
  `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const getDataService = async () => {
  const data = await getDataPokemonBucle();
  console.log(data);
  printGallery(data);
};

const printGallery = (dataPrint) => {
  dataPrint.map((pokemon) =>
    PrintFigurePokemon(pokemon.name, pokemon.id, pokemon.image, pokemon.type)
  );
};

const listeners = () => {};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  getDataService();
};
