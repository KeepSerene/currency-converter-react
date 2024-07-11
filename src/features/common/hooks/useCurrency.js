import { useState } from "react";
import { useQueries } from "@tanstack/react-query";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

export const useCurrency = () => {
  const [amount, setAmount] = useState(100);
  const [currency1, setCurrency1] = useState("INR");
  const [currency2, setCurrency2] = useState("USD");

  const [ratesData, symbolsData] = useQueries({
    queries: [
      {
        queryKey: ["rates", currency1],
        queryFn: () => fetchRates(currency1),
        staleTime: Infinity,
        select: ({ date, rates, timestamp }) => {
          return { date, rates, timestamp };
        },
      },

      {
        queryKey: ["symbols"],
        queryFn: fetchSymbols,
        staleTime: Infinity,
        select: ({ symbols }) => symbols,
      },
    ],
  });

  const isLoading = [ratesData, symbolsData].some((query) => query.isLoading);
  const isError = [ratesData, symbolsData].some((query) => query.isError);

  const convertedAmountStr = (
    ratesData.data?.rates[currency2] * amount
  ).toFixed(2);
  const queryDate = new Date(ratesData.data?.date).toLocaleDateString();
  const queryTime = new Date(ratesData.data?.timestamp).toLocaleTimeString(
    "en-US"
  );
  const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : [];

  return {
    amount,
    setAmount,
    currency1,
    setCurrency1,
    currency2,
    setCurrency2,
    symbolsData,
    isLoading,
    isError,
    convertedAmountStr,
    queryDate,
    queryTime,
    currencyList,
  };
};
