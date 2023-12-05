import { axiosUtil } from "../utils/axios";

//! --------------------END POINT ---> GET ALL CHARACTER

export const getAll = async () => {
  const optionRequest = {
    method: "GET",
    url: "https://rickandmortyapi.com/api/character",
  };

  return await axiosUtil(optionRequest);
};
