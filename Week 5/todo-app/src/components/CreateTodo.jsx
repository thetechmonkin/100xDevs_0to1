import React from "react";

function CreateTodo() {
  return <div>
    <input style={{padding: 10, margin: 10}} type="text" placeholder="Enter Title"/><br />
    <input style={{padding: 10, margin: 10}} type="text" placeholder="Enter Description"/><br />
    <button>Add a todo</button>
  </div>;
}

export default CreateTodo;
