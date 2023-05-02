import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";
import { useState } from "react";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: ``,
  heading: ``,
  form: ``,
  input: ``,
  button: ``,
  count: ``,
};

function App() {
  const [todos, setTodos] = useState(["Learn React", "Learn Tailwind"]);
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TO-DO APP</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add to-do " />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have 2 to-dos</p>
      </div>
    </div>
  );
}

export default App;
