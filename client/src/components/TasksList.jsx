import { useEffect,useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";
export function TasksList() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    async function loadTasks() { // debe tener la funcion el async para decirle que esta pidiendo algo de forma asincrona
      const res = await getAllTasks(); // y que aqui se esta esperando esta respuesta
      setTasks(res.data)
    }
    loadTasks();
  }, []);
  return <div className="grid grid-cols-3 gap-3">
    {tasks.map(task => (
      <TaskCard key={task.id} task={task}/>
    ))}
  </div>;
}