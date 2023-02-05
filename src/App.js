import { TasksProvider } from "./context/TaskContext";
import Home from "./pages/Home";

export default function TaskApp() {
  return (
    <TasksProvider>
      <Home />
    </TasksProvider>
  );
}
