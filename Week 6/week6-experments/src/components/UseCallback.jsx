import React from 'react'

const UseCallback = () => {
  return (
    <div>

    </div>
  )
}

export default UseCallback

// useCallback - It is used to memoize functions which can help in optimizing the performance of your application
// , especially in cases involving the child components that relay on reference to prevent 
// unnecessary re-renders. It is similar to useMemo, this is used for functions. 

// refs - ReactJS Refs are used to access and modify the DOM elements in the React Application. 
//        It creates a reference to the elements and uses it to modify them.

// useRef - The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
//           Unlike useState if we change a value in useRef it will not re-render the webpage
//           The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. 
//           Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed 
//           they make the application faster and helps in caching and storing previous values

// import { useCallback, useEffect, useRef, useState } from 'react'

// function App() {
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       divRef.current.innerHTML = "10"
//     }, 5000);
//   }, [])

//   const incomeTax = 20000;

//   return (
//     <div>
//         hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
//     </div>
//   )
// }

// export default App