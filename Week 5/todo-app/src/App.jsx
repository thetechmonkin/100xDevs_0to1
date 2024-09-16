import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
import { useState } from 'react';

function App() {

  const [todo, setTodo] = useState([]);

  return (
    <>
      <CreateTodo />
      <Todos />
    </>
  )
}

export default App
