import { RxCaretSort } from "react-icons/rx";
interface Props {
  expenses: string;
}
const ExpenseTable = ({ expenses }: Props) => {
  return (
    <table className="w-full max-w-[1200px] m-auto border">
      <thead className="font-normal border-b roudned-full hover:bg-gray-50">
        <tr className="flex items-center justify-between">
          <th>
            <button>
              Title <RxCaretSort />
            </button>
          </th>
          <th>
            <button>
              Status <RxCaretSort />
            </button>
          </th>
          <th>
            <button>
              Priority <RxCaretSort />
            </button>
          </th>
          <th>
            <button>
              Category <RxCaretSort />
            </button>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {!expenses && (
            <td className="py-6 text-sm text-center text-gray-600">
              No results.
            </td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default ExpenseTable;
