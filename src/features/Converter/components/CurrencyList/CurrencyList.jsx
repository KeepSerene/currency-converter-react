import { useCountryFlags } from "../../../common/hooks/useCountryFlags";
import { Avatar, Flex, Select } from "@chakra-ui/react";

const CurrencyList = ({
  currency,
  onCurrencyChange,
  currencyList,
  symbols,
}) => {
  const { flagURL } = useCountryFlags(currency);

  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Avatar src={flagURL} size="xs" />

      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(event) => onCurrencyChange(event.target.value)}
      >
        {currencyList.map((currency) => (
          <option key={currency} value={currency}>
            {currency} - {symbols[currency]}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default CurrencyList;
