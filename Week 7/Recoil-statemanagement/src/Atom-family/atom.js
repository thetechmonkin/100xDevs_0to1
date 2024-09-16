import { atomFamily, selectorFamily } from "recoil";
import { TODO } from "./todo";
import axios from 'axios';

const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => { //NOW A FUNCTION
    return TODO.find((todo) => todo.id === id);
  },
});

// Selector Family

const todosSelectorFamily = atomFamily({
    key: "todosSelectorFamily",
    default: selectorFamily({
        key: 'todoSelectorAtom',
        default: id => async ({get}) => { // Function that returns a function
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data.todo;
        }
    })
})

export { todosAtomFamily, todosSelectorFamily };
// Revisit Recoil