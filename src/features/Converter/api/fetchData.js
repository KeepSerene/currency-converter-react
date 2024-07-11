import { axiosAPI } from "../../../lib/axios";

export const fetchRates = async (curreny1) => {
  const { data } = await axiosAPI.get(
    `/latest?base=${curreny1}&apikey=${import.meta.env.VITE_API_KEY}`
  );

  return data;
};

export const fetchSymbols = async () => {
  const { data } = await axiosAPI.get(
    `/symbols?apikey=${import.meta.env.VITE_API_KEY}`
  );

  return data;
};
