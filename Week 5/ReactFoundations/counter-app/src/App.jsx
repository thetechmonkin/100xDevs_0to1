import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function onButtonClick(){
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={onButtonClick}>Count {count}</button>
      <CustomButton count={count} setCount={setCount} />
    </>
  )
}

function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return(
    <button onClick={onClickHandler}>Click Meee {props.count}</button>
  )
}

export default App
