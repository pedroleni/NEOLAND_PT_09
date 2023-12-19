export const typePokemon = (totalPokemon) => {
  const nameTypeNoReapet = [];

  totalPokemon.forEach((item, index) => {
    item.type.forEach((typeSingle) => {
      !nameTypeNoReapet.includes(typeSingle.type.name) &&
        nameTypeNoReapet.push(typeSingle.type.name);
    });
  });

  return nameTypeNoReapet;
};
