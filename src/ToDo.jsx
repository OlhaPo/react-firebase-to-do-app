import React from "react";
import { MdDelete } from "react-icons/md";

const style = {
  li: ``,
  row: ``,
  text: ``,
};

const ToDo = ({ todo }) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{todo}</p>
      </div>
      <button>
        <MdDelete />
      </button>
    </li>
  );
};

export default ToDo;
