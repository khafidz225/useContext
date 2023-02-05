import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
  //useReducer(nilaibaru, InisialNilaiAwal)
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

//data tasksReducer ini di dapat dari useReducer pada line ke 9
function tasksReducer(tasks, action) {
  // tasks itu semua isi valuenya
  // action itu data yang masuk
  console.log("tasks:", tasks);
  console.log("action:", action);
  switch (action.type) {
    //Jika action.type isinya added maka jalankan code di bawah
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    //Jika action.type isinya changed maka jalankan code di bawah
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    //Jika action.type isinya deleted maka jalankan code di bawah
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    //Defaultnya
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

//Menginiliasi nilai awal pada useContext
const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
