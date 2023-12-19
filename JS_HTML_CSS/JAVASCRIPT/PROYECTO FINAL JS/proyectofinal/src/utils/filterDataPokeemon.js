export const filterDataPokeemon = (data, palabraDelInput) => {
  return data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(palabraDelInput.toLowerCase())
  );
};

export const filterDataPokemonSelect = (data, typeOnchangeSelect) => {
  //typeOnchangeSelect === a el type seleccionado en el select

  const filterPokemon = data.filter((pokemon) =>
    pokemon.type[0].type.name
      .toLowerCase()
      .includes(typeOnchangeSelect.toLowerCase())
  );

  const filterPokemonPositionOne = data.filter((pokemon) =>
    pokemon.type[1]?.type.name
      .toLowerCase()
      .includes(typeOnchangeSelect.toLowerCase())
  );

  if (typeOnchangeSelect == "All pokemon") {
    return data;
  } else if (filterPokemon.length == 0) {
    return filterPokemonPositionOne;
  } else {
    return filterPokemon;
  }
};
