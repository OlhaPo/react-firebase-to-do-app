import React, { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./ToDo";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

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
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Create todo
  const addTask = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Enter a valid task");
      return;
    }
    await addDoc(collection(db, "todos"), {
      title: input,
      completed: false,
    });
    setInput("");
  };

  // Read todo from firebase
  useEffect(() => {
    // preparation
    const q = query(collection(db, "todos"));

    // subscribe to changes
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // on new data from FB

      let todosArr = [];
      querySnapshot.forEach((doc) =>
        todosArr.push({ ...doc.data(), id: doc.id })
      );
      setTodos(todosArr);
      console.log(todosArr);
    });

    // on destroy
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = (todo) => {
    updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
    //
  };

  // Delete todo

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>TO-DO APP</h3>
        <form onSubmit={addTask} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add to-do "
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>You have {todos.length} to-dos</p>
        )}
      </div>
    </div>
  );
}

export default App;
