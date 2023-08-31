import Button from "../../components/Button";
import TaskType from "../../entities/task";
import useStore from "../../store";

interface Props {
  task: TaskType;
}
const Task = ({ task }: Props) => {
  const deleteTask = useStore((store) => store.deleteTask);
  return (
    <tr className="text-sm">
      <td className="w-full text-left pl-3">{task.title.substring(0, 400)}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.category}</td>
      <td>
        <Button
          type="button"
          handleClick={() => deleteTask(task.id)}
          className="border mx-auto bg-red-500 text-white break-normal "
        >
          delete
        </Button>
      </td>
    </tr>
  );
};

export default Task;
