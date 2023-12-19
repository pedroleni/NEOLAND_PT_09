import {
  PrintFigurePokemon,
  PrintSelectTypePokemon,
  PrintSpinner,
} from "../../components";
import {
  filterDataPokeemon,
  getDataPokemonBucle,
  typePokemon,
} from "../../utils";
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
  PrintSpinner();
  const data = await getDataPokemonBucle();

  // hacer una funcion que nos devuelva un array con los diferentes tipos de pokemon
  const types = typePokemon(data);

  /* ahora que tenemos los diferentes tipos de botones */
  PrintSelectTypePokemon(types, data);

  listeners(data);
  console.log(data);
  printGallery(data);
  document.getElementById("spinner").innerHTML = "";
};

export const printGallery = (dataPrint) => {
  document.getElementById("galleryPokemon").innerHTML = "";
  dataPrint.map((pokemon) =>
    PrintFigurePokemon(pokemon.name, pokemon.id, pokemon.image, pokemon.type)
  );
};

const listeners = (totalData) => {
  const inputPokemon = document.getElementById("inputPokemon");

  inputPokemon.addEventListener("input", (e) => {
    const filterPokemon = filterDataPokeemon(totalData, e.target.value);
    printGallery(filterPokemon);
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  getDataService();
};
