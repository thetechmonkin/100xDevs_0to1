// ATOM FAMILY

import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './Atom-family/atom';

import React from 'react'

const App4 = () => {
  return (
    <div>
        <RecoilRoot>
            <ToDo id={1} />
            <ToDo id={2} />
        </RecoilRoot>
    </div>
  )
}

function ToDo({id}){
    const currentTodo = useRecoilValue(todosAtomFamily(id))
    return (<>
        {currentTodo.title} <br />
        {currentTodo.description} <br />
    </>);
}

export default App4
