import axios from 'axios'
export const getAllTasks = () => {
  //como es get, debe terminar en "/", importante de django
  return axios.get('http://localhost:8000/tasks/api/v1/tasks/')
}