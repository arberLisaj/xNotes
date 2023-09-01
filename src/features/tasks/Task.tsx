import { useState } from "react";
import { BsCaretRightFill, BsThreeDotsVertical, BsTrash } from "react-icons/bs";
import Button from "../../components/Button";
import TaskType from "../../entities/task";
import useStore from "../../store";
interface Props {
  task: TaskType;
}
const Task = ({ task }: Props) => {
  const [editTask, setEditTask] = useState(false);
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
          handleClick={() => setEditTask((value) => !value)}
        >
          <BsThreeDotsVertical />
        </Button>
        {editTask && (
          <ul className="absolute text-left left-[110%] top-0 w-[110px] border border-gray-400 bg-white">
            <li>
              <Button
                className="p-2 w-full hover:bg-gray-200 rounded-none"
                title="status"
                type="button"
              >
                Status
                <BsCaretRightFill className="ml-auto" />
              </Button>
            </li>
            <li>
              <Button
                className="p-2 w-full hover:bg-gray-200 rounded-none"
                title="status"
                type="button"
              >
                Priority
                <BsCaretRightFill className="ml-auto" />
              </Button>
            </li>
            <li>
              <Button
                className="p-2 w-full hover:bg-gray-200 rounded-none"
                title="status"
                type="button"
              >
                Category
                <BsCaretRightFill className="ml-auto" />
              </Button>
            </li>
            <li>
              <Button
                className="p-2 w-full hover:bg-gray-200 rounded-none"
                title="delete"
                type="button"
                handleClick={() => deleteTask(task.id)}
              >
                Delete <BsTrash className="ml-auto" />
              </Button>
            </li>
          </ul>
        )}
      </td>
    </tr>
  );
};
export default Task;
