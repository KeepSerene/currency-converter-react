import { useCurrency } from "../common/hooks/useCurrency";
import { Text, Spinner, Box, Grid, GridItem, Link } from "@chakra-ui/react";
import Header from "./components/Header";
import CurrencyList from "./components/CurrencyList/CurrencyList";
import UserInput from "./components/UserInput/UserInput";
import Display from "./components/Display/Display";
import { RepeatIcon } from "@chakra-ui/icons";

const Converter = () => {
  const {
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
  } = useCurrency();

  if (isError) {
    return (
      <Text color="white" fontSize="3xl" fontWeight="bold" my="10">
        Something has gone terribly wrong!
      </Text>
    );
  }

  if (isLoading) {
    return (
      <Spinner
        color="purple.500"
        emptyColor="purple.200"
        size="xl"
        thickness="4px"
        margin="auto 0"
        speed="0.65s"
      />
    );
  }

  return (
    <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
      <Header />

      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap="1rem"
        backgroundColor="white"
        borderRadius="lg"
        padding={{ base: "6", sm: "10" }}
      >
        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <CurrencyList
            currency={currency1}
            onCurrencyChange={setCurrency1}
            currencyList={currencyList}
            symbols={symbolsData.data}
          />
        </GridItem>

        <GridItem
          display={{ base: "none", sm: "block" }}
          colSpan={1}
          justifySelf="center"
          alignSelf="center"
        >
          <RepeatIcon boxSize="2rem" color="purple.300" />
        </GridItem>

        <GridItem
          colSpan={{ base: 5, sm: 2 }}
          justifySelf="center"
          alignSelf="center"
        >
          <CurrencyList
            currency={currency2}
            onCurrencyChange={setCurrency2}
            currencyList={currencyList}
            symbols={symbolsData.data}
          />
        </GridItem>

        <GridItem colSpan={2}>
          <UserInput amount={amount} onAmountChange={setAmount} />
        </GridItem>

        <GridItem colSpan={3} justifySelf="right" alignSelf="right">
          <Display
            amount={amount}
            currency1={currency1}
            currency2={currency2}
            convertedAmountStr={convertedAmountStr}
            queryDate={queryDate}
            queryTime={queryTime}
          />
        </GridItem>
      </Grid>

      <Text
        color="whiteAlpha.600"
        fontSize="sm"
        textAlign="center"
        marginTop="1.5rem"
      >
        Developed with dedication by{" "}
        <Text as="span" color="purple.300">
          <Link href="https://github.com/KeepSerene" isExternal>
            KeepSerene
          </Link>
        </Text>{" "}
        using ReactJS, Axios, TanStack Query, and Chakra-UI. 💜
      </Text>
    </Box>
  );
};

export default Converter;
