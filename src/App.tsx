import { useSelector, useDispatch, Provider, shallowEqual } from "react-redux";
import { Box, Button, Text } from "@mantine/core";
import { store, addToFirst, RootState, addToSecond, doNothing } from "./store";

const DoNothingButton = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" onClick={() => dispatch(doNothing())}>
      Do nothing
    </Button>
  );
};

const AddToFirstButton = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" onClick={() => dispatch(addToFirst())}>
      Add To First
    </Button>
  );
};

const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state);
  return <Text size="xl">First Value: {firstNumber}</Text>;
};

const AddToSecondButton = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" onClick={() => dispatch(addToSecond())}>
      Add To Second
    </Button>
  );
};

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber);
  return <Text size="xl">Second Value: {secondNumber}</Text>;
};

const NumbersValue = () => {
  const numbers = useSelector(
    (state: RootState) => state.numbers,
    shallowEqual
  );
  return (
    <Text size="xl" p={5}>
      Numbers {numbers.join(", ")}
    </Text>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Box p={10}>
        <Box sx={{ display: "flex" }}>
          <DoNothingButton />
        </Box>
        <Box mt={10} sx={{ display: "flex" }}>
          <AddToFirstButton />
          <FirstValue />
        </Box>
        <Box mt={10} sx={{ display: "flex" }}>
          <AddToSecondButton />
          <SecondValue />
        </Box>
      </Box>
      <NumbersValue />
    </Provider>
  );
}

export default App;
