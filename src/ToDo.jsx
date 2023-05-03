import React from "react";
import { MdDelete } from "react-icons/md";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize `,
  row: `flex`,
  text: `ml-2 cursor-pointer `,
  textComplete: `ml-2 cursor-pointer  line-through`,
  button: `cursor-pointer flex items-center`,
};

const ToDo = ({ todo, toggleComplete, deleteTask }) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={todo.completed ? style.textComplete : style.text}
        >
          {todo.title}
        </p>
      </div>
      <button onClick={() => deleteTask(todo.id)}>
        <MdDelete />
      </button>
    </li>
  );
};

export default ToDo;
