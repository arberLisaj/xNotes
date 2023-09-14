import Button from "@/components/Button";
import useStore from "@/store";
import { BsThreeDotsVertical } from "react-icons/bs";

export interface TaskType {
  id: number;
  title: string;
  status: string;
  priority: string;
  category: string;
}

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
      <td className="relative">
        <Button
          title="edit"
          type="button"
          className="mx-auto dark:bg-transparent"
          handleClick={() => deleteTask(task.id)}
        >
          <BsThreeDotsVertical />
        </Button>
      </td>
    </tr>
  );
};
export default Task;
