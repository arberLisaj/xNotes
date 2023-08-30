import Button from "../../components/Button";
import useStore from "../../store";
import { TaskStructure } from "./TaskTable";

interface Props {
  task: TaskStructure;
}
const Task = ({ task }: Props) => {
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <tr className="text-sm">
      <td className="w-full max-w-[30px]">{task.title.substring(0, 400)}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.category}</td>
      <td>
        <Button
          type="button"
          handleClick={() => deleteTask(task.id)}
          className="border bg-red-500 text-white break-normal "
        >
          delete
        </Button>
      </td>
    </tr>
  );
};

export default Task;
