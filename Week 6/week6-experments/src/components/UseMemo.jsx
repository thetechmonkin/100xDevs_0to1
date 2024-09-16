import React, { useState, useMemo } from "react";

const UseMemo = () => {
  let [num, setNum] = useState(0);
  let [counter, setCounter] = useState(0);

  // let count = 0;
  // for(let i = 1; i <= num; i++)
  //     count = count + i;
  // {console.log("Called")}

  // Using useMemo

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i = 1; i <= num; i++) {
      finalCount = finalCount + i;
    }
    console.log("Called ");

    return finalCount;
  }, [num]);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setNum(e.target.value)}
      />
      <p>Sum is : {count}</p>
      <button onClick={() => setCounter((counter = counter + 1))}>
        Counter {counter}
      </button>
    </div>
    // On clicking the button whole component rerenders and that expensive for loop also runs again so to
    // avoid this we use useMemo
  );
};

export default UseMemo;

// Reconciliation - Reconciliation in React is the process of updating the DOM to match the 
// changes in the component's state or props. React uses a virtual DOM to efficiently compare 
// the previous and current render trees (a process called diffing) and updates only the parts 
// of the real DOM that changed. 
// This minimizes direct DOM manipulation, improving performance.

// Memoization - It means remembering some output given an input and not computing it again.
// It is used to optimize performance by avoiding unnecessary computations.

// useMemo Hook -
