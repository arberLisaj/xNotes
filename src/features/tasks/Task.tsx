import { TaskStructure } from "./TaskTable";

interface Props {
  task: TaskStructure;
}
const Task = ({ task }: Props) => {
  return (
    <tr className="flex items-center">
      <td>{task.title}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.category}</td>
      <td>...</td>
    </tr>
  );
};

export default Task;
