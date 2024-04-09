import React, { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "./store/atoms/Todo";

function App() {
  return (
    <RecoilRoot>
      <Input />
      <Todo />
    </RecoilRoot>
  );
}

function Input(input) {
  const [value, setValue] = useRecoilState(todoAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(input)
  
  function addTodo() {
    setValue([
      ...value,
      { id: Date.now(), title: title, description: description },
    ]);
    setTitle("");
    setDescription("");
  }
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}> Submit </button>
    </>
  );
}

function Todo() {
  // function updateTodo(todo) {
  //   console.log(todo);
  // }
  function deleteTodo(id) {
    setTodo((prevTodo) => prevTodo.filter((todos) => todos.id !== id));
  }
  const [Todo, setTodo] = useRecoilState(todoAtom);

  return (
    <>
      {Todo.map((todo) => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
          <button onClick={() => deleteTodo(todo.id)}>delete</button>
          <button onClick={() => Input(todo)}>Update</button>
        </div>
      ))}
    </>
  );
}
export default App;
