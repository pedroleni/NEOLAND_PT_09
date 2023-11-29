import { PrintCard } from "../components/Card";
import { countries } from "../data/data";

export const printData = () => {
  countries.map((pais) => PrintCard(pais.imgUrl, pais.title));
};
