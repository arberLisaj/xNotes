import { TaskStructure } from "./TaskTable";
import useStore from "../../assets/store";

interface Props {
  task: TaskStructure;
}
const Task = ({ task }: Props) => {
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <tr className="text-sm">
      <td>{task.title.substring(0,400)}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.category}</td>
      <td>
        <button
          type="button"
          title="delete"
          onClick={() => deleteTask(task.id)}
          className=" w-fit block text-red-600 text-sm underline hover:text-red-500 active:text-red-600 dark:text-red-100"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Task;
