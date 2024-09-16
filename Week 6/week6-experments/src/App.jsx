import { useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import { CardWrapper, TextComponent } from './components/CardWrapper';
import Hooks from './components/Hooks';
import UseMemo from './components/UseMemo';

function App() {

  return (
    <div>
      {/* <HeaderWithButton />
      <Headers title={"Header 1"} />
      <Headers title={"Header 2"} />

      <CardWrapper innerComponent={<TextComponent />} />

      <Hooks /> */}

      <UseMemo />
    </div>
  )
}

function HeaderWithButton(){
  let [title, setTitle] = useState('');

  function onBtnClick(){
    setTitle("My name is " +  Math.random());
  }
  return(
    <>
    <button onClick={onBtnClick}>Click me to change the title</button>
    <Headers title={title} />
    </>
  );
}

export default App

// Re-render => Minimize re-renders
// If parent renders even there is no change in th props of child it will re render
// To avoid this we wrap the child in the memo
// Memo => Memo lets you skip re-rendering a component when its props are unchanged.
// Ex  - const childComponent = memo(() => {
  //    ...........logic..............
  // })

