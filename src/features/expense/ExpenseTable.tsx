import CATEGORY_OPTIONS from "../../constants/category";
import PRIORITY_OPTIONS from "../../constants/priority";
import SORT_OPTIONS from "../../constants/sort";
import PROGRESS_STATUS from "../../constants/status";

const ExpenseTable = () => {
  return (
    <table className="w-full max-w-[1200px] m-auto border roudned-full">
      <thead className="font-normal roudned-full">
        <tr className="py-3">
          <th>
            <select>
              <option value="">Title</option>
              {SORT_OPTIONS.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </th>
          <th>
            <select>
              <option value="">Status</option>
              {PROGRESS_STATUS.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </th>
          <th>
            <select>
              <option value="">Priority</option>
              {PRIORITY_OPTIONS.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </th>
          <th>
            <select>
              <option value="">Category</option>
              {CATEGORY_OPTIONS.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </th>
          <th></th>
        </tr>
      </thead>
    </table>
  );
};

export default ExpenseTable;
