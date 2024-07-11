export const useCountryFlags = (countryCode) => {
  const flagURL = `https://www.wise.com/public-resources/assets/flags/rectangle/${countryCode.toLowerCase()}.png`;

  return { flagURL };
};
