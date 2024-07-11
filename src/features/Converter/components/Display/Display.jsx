import { Box, Text } from "@chakra-ui/react";

const Display = ({
  amount,
  currency1,
  currency2,
  convertedAmountStr,
  queryDate,
  queryTime,
}) => {
  return (
    <Box textAlign="right">
      <Text color="purple.300" fontSize="lg" fontWeight="bold">
        {amount} {currency1}
      </Text>

      <Text color="purple.500" fontSize="2xl" fontWeight="bold">
        {convertedAmountStr} {currency2}
      </Text>

      <Text color="gray.400" fontSize="xs">
        Market rates as of {queryDate}, {queryTime}
      </Text>
    </Box>
  );
};

export default Display;
