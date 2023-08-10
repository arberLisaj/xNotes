import { RxCaretSort } from "react-icons/rx";
import Task from "../../pages/tasks/Task";
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
        <tr className="bg-gray-50">
          <th>
            Title <RxCaretSort />
          </th>
          <th>
            Status <RxCaretSort />
          </th>
          <th>
            Priority <RxCaretSort />
          </th>
          <th>
            Category <RxCaretSort />
          </th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {!tasks && (
          <tr>
            <td className="py-6 text-sm text-center text-gray-600">
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
