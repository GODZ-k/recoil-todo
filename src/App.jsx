import React, { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { todoFamily } from "./store/atoms/Todo.js";

function App() {
  return (
    <RecoilRoot>
      {/* <Input /> */}
      <Todo  id={1}/>
      {/* <Todo id={2}/> */}
    </RecoilRoot>
  );
}

function Todo({id}){

  const currentTodo = useRecoilValueLoadable(todoFamily(id))
  switch (currentTodo.state) {
    case "hasValue":
      return(
        <>
        <div>{currentTodo.contents.title}</div>
        <div>{currentTodo.contents.description}</div>
        </>
      )
      case "loading":
        return(
          <>
          <div>Loading ...</div>          
          </>
        )
  
      case "hasError":
        return(
          <>
          <div>Error while fatchhing the data</div>
          </>
        )

    default:
      break;
  }
  
}

// function Input() {
//   const [value, setValue] = useRecoilState(todoAtom);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   function addTodo() {
//     setValue([
//       ...value,
//       { id: Date.now(), title: title, description: description },
//     ]);

//     setTitle("");

//     setDescription("");

//     return (
//       <>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button onClick={addTodo}> Submit </button>
//       </>
//     );
//   }
// }

// function Todo() {
//   function updateTodo(todo) {
//     console.log(todo);
//   }

//   function deleteTodo(id) {
//     setTodo((prevTodo) => prevTodo.filter((todos) => todos.id !== id));
//   }

//   const [Todo, setTodo] = useRecoilState(todoAtom);

//   return (
//     <>
//       {Todo.map((todo) => (
//         <div key={todo.id}>
//           <div>{todo.title}</div>
//           <div>{todo.description}</div>
//           <button onClick={() => deleteTodo(todo.id)}>delete</button>
//           <button onClick={() => updateTodo(todo)}>Update</button>
//         </div>
//       ))}
//     </>
//   );
// }

export default App;
