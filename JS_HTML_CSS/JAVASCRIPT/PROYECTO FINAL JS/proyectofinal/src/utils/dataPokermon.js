import { getByIdPokemon } from "../services/pokemon.service";

export const getDataPokemonBucle = async () => {
  const rawData = [];
  for (let i = 1; i < 151; i++) {
    rawData.push(await getByIdPokemon(i));
  }

  return dataMap(rawData);
};

const dataMap = (data) => {
  const filteData = data.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    type: pokemon.types,
    id: pokemon.id,
  }));

  return filteData;
};
