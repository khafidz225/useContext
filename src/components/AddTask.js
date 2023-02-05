import { useState, useContext } from "react";
import { useTasksDispatch } from "../context/TaskContext";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();
  return (
    <>
      <div className="flex">
        <input
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => {
            setText("");
            dispatch({
              type: "added",
              id: nextId++,
              text: text,
            });
          }}
          className="rounded bg-blue-400 w-[150px] p-1"
        >
          save changes
        </button>
        <p className="bg-red-400 "></p>
      </div>
    </>
  );
}

let nextId = 3;
