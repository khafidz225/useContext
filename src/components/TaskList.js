import { useState, useContext } from "react";
import { useTasks, useTasksDispatch } from "../context/TaskContext";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        // <div className="flex justify-end">
        <div className="flex flex-row">
          <li key={task.id} className="flex flex-row">
            <Task task={task} />
          </li>
        </div>
        // </div>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  //Jika di click button edit maka akan muncul column input dan jika di pencet save data akan berubah dan menjadi
  //teks seperti biasa
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = <>{task.text}</>;
  }
  return (
    <label className="flex justify-between w-[500px] mb-2 mt-2">
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {taskContent}
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setIsEditing(true)}
          className="rounded bg-blue-400 p-1 w-[50px]"
        >
          Edit
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
          className="bg-red-400 p-1 rounded ml-2"
        >
          Delete
        </button>
      </div>
    </label>
  );
}
