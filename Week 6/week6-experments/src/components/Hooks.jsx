// Hooks

// State : In React, state is a built-in JavaScript object that stores information about a component and allows 
//         it to remember that information between renders

// 1. side effects:- In react concept of side effects encompasses any operation that 
//    reach outside the functional scope of react component. These operations can affect other 
//    components, the DOM, or the browser or perform async data fetching. 
//    Side effects are typically handled using hooks.

// 2. Hooks:- In React, hooks are special functions that allow you to "hook into" 
// React features, such as state and lifecycle methods, from function components. 
// Prior to hooks, only class components could manage state and lifecycle events, but with hooks, 
// these capabilities are extended to function components as well.

// useState
// useEffect
// useCallback
// useMemo
// useRef
// useContext
// useReducer

import React, { useContext, useEffect, useState } from 'react'
import axios from "axios";

const Hooks = () => {

    let [todo, setTdo] = useState([]);

    useEffect(() => {  //useEffect is a hook that allows you to perform side effects in your components
        // You can not use async await here but you can declare the function outside with async and call it here
        axios.get("https://sum-server.100xdevs.com/todos")
        .then((res) => {
            setTdo(res.data.todos);
        })
    }, [])
  return (
    <div>
        {todo.map(todo => <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

const Todo = ({title, description}) => {
    return(
        <>
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
            </div>
        </>
    )
}

export default Hooks