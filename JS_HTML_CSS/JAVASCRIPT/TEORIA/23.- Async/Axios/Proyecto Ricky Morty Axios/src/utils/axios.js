import axios from "axios";

export const axiosUtil = async (optiones) => {
  return await axios.request(optiones).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
