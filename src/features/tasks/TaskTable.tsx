import useStore from "../../assets/store";
import Task from "./Task";
export interface TaskStructure {
  id: number;
  title: string;
  status: string;
  priority: string;
  category: string;
}

const TaskTable = () => {
  const tasks = useStore((store) => store.tasks);
  return (
    <table className="w-full max-w-[1100px] m-auto dark:text-gray-200">
      <thead>
        <tr className="border-y border-gray-300 dark:border-gray-500">
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.length === 0 && (
          <tr>
            <td colSpan={5} className="text-center text-xs py-3">
              Add your first task.
            </td>
          </tr>
        )}
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
