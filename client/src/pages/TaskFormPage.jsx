import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask,deleteTask,updateTask,getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate(); // para poder navegar, esta funcion retorna una funcion a utilizar
  const params = useParams(); //para extraer los parametros de la url actual, por ejemplo, si recibe un id

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
    } else {
      await createTask(data);
    }
    navigate("/tasks");
  });
  useEffect(() => { //como hago una peticion con getTask, debe tener el await pero no le puedo poner el async al useEffect asi que creo la funcion dentro y la ejecuto
    async function loadTask() {
      if (params.id) {
        //asi extraigo de la peticion solo data, y tambien solo title y description que vienen de data
        const {
          data: { title, description },
        } = await getTask(params.id);
        setValue('title',title)
        setValue('description',description)
      }
    }
    loadTask();
},[])
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>description is required</span>}
        <button>Save</button>
      </form>
      {params.id && <button onClick={async () => {
        const accepted=window.confirm('Are you sure?')
        if (accepted) {
          await deleteTask(params.id);
          navigate("/tasks")
        }
        

      }}>Delete</button>}
      {/* para renderizar el boton dependiendo si existe un id o no en la url*/}
    </div>
  );
}
