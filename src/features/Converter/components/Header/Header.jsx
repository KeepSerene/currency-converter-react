import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box color="white" textAlign="center" marginTop="20" marginBottom="10">
      <Text fontSize="3xl" fontWeight="bold" textTransform="capitalize">
        Currency converter & exchange rates
      </Text>

      <Text fontSize="2xl" fontWeight="light">
        Up to date FX rates
      </Text>
    </Box>
  );
};

export default Header;
