import { FormLabel, Input } from "@chakra-ui/react";

const UserInput = ({ amount, onAmountChange }) => {
  return (
    <>
      <FormLabel htmlFor="amount" color="purple.300">
        Amount:
      </FormLabel>

      <Input
        id="amount"
        size="lg"
        type="number"
        value={amount}
        min={0}
        onChange={(event) => onAmountChange(event.target.value)}
      />
    </>
  );
};

export default UserInput;
