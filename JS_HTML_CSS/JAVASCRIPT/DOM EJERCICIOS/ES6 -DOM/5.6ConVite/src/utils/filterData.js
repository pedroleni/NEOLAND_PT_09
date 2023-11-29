import { streamers } from "../data/busquedaPage.data";
export const filterData = (textoInputBusqueda) => {
  const dataFiltrada = streamers.filter((item) =>
    item.name.toLowerCase().includes(textoInputBusqueda.toLowerCase())
  );

  return dataFiltrada;
};
