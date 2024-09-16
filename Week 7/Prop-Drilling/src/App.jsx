import { useState } from "react";
import "./App.css";
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} />
      {/* When we  sent the button component to the count we have to pass setcount to the count
      component even it do not need it*/}
      <Buttons count={count} setCount={setCount}/> 

      {/* CONTEXT API */}

      {/* Wrap any one that wants to use the teleported  value inside a provider*/}

      <CountContext.Provider value={count}>
        <Count />
        <CountRender />
      </CountContext.Provider>
    </>
  );
}

export default App;

function CountRender(){
  const count = useContext(CountContext);
  return <div>Count: {count}</div>
}

const Count = ({count}) => {
  return <>
    {count}
  </>;
};

const Buttons = ({count, setCount}) => {
  return <>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  </>;
};

// Prop Drilling ------> Prop drilling is basically a situation when the same data is being 
// sent at almost every level due to requirements in the final level.
// A thumb rule is that Keep everything (states) as low as possible (At the least common ancestor (LCA) of the children that need a state)
// To avoid re rendering of the parent element. when a state changes the component re renders

// Prop drilling does'nt mean that parent re renders children It means the syntactic uneasiness when writing the code

// Context API - This lets you fix prop drilling
// If you use context api you are pushing your state management outside the core react components
// Things to learn
// 1. createContext
// 2. useContext hook
// 3. Provider