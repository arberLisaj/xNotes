import Task from "./Task";
export interface TaskStructure {
  id: number;
  title: string;
  status: string;
  priority: string;
  category: string;
}
interface Props {
  tasks: TaskStructure[];
}
const TaskTable = ({ tasks }: Props) => {
  return (
    <table className="w-full max-w-[1200px] m-auto">
      <thead className="">
        <tr className="bg-gray-50 dark:bg-gray-700 ">
          <th>Title</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {!tasks && (
          <tr>
            <td className="py-6 text-sm text-center text-gray-600 dark:text-white">
              No results.
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
