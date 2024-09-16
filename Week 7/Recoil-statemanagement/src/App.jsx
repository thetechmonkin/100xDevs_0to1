import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import "./App.css";

function App() {
  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
}

function CountRender() {
  let count = useRecoilValue(countAtom);
  return <div>Count: {count}</div>;
}

const Count = () => {
  return (
    <>
      <CountRender />
      <Buttons />
    </>
  );
};

const Buttons = () => {
  // let [count, setCount] = useRecoilState(countAtom);
  let setCount = useSetRecoilState(countAtom);
  return (
    <>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button> */}
      {/* <button onClick={() => setCount(count - 1)}>Decrease</button> */}
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </>
  );
};

export default App;

// Why do you use context API?
// To make rendering more performant? =>  NO
// To make syntax cleaner, To get get of prop drilling => YES
// Context does mot fix re-rendering only fixes prop drilling

// We use state management libraries for making app more performant
// Recoil - state management library
// It hasa concept of atom to store the state. an atom can be defined outside the component, Can be teleported to any component
// atom is similar to useState

// Things to learn
// RecoilRoot
// atom
// useRecoilState -> Similar to useState
// useSetRecoilState -> Only sets the value
// useRecoilValue -> Only read the value
// selector -> A selector represents a piece of derived state. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.
