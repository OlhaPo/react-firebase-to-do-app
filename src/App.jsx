import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";
import { useState } from "react";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-width-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
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
