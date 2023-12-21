import axios from "axios";

export const axiosUtil = async (optiones) => {
  return await axios
    .request(optiones)
    .then((res) => {
      console.log("soy la respuesta de axios", res);
      res.data;
    })
    .catch((error) => {
      error;
    });
};
