import axios from 'axios'

const tasksApi=axios.create({
  baseURL:'http://localhost:8000/tasks/api/v1/tasks/'
})
//como es get, debe terminar en "/", importante de django
export const getAllTasks = () => tasksApi.get("/"); 
// el "/" es que lo manda a la misma ruta

export const getTask = (id) => tasksApi.get(`/${id}`); //me retorna el json con los datos

export const createTask = (task) => tasksApi.post("/",task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`); // le concateno el id para borrar, porque esa seria la ruta de la tarea y le mando una peticion delete

//para el put debe terminar el "/"
export const updateTask = (id, task) => tasksApi.put(`/${id}/`,task); //le paso la ruta a donde voy a mandar el put de actualizar, y los campos para actualizar, que en si es un objeto serializado por axios
