import Converter from "./features/Converter";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Flex
        height="100vh"
        bgGradient="linear(to-t, #ae085c, #2e065e)"
        justifyContent="center"
      >
        <Converter />
      </Flex>
    </>
  );
};

export default App;
