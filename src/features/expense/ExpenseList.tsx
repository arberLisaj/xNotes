import useStore from "@/store";
import Expense from "./Expense";

const ExpenseList = () => {
  const expenses = useStore((store) => store.expenses);
  return (
    <div className="w-full max-w-[1100px] m-auto flex gap-4 flex-wrap">
      <hr className="bg-gray-200 h-0.5 w-full dark:bg-gray-600 rounded border-none" />
      {expenses.length === 0 ? (
        <p className="dark:text-gray-100">Add your first expense.</p>
      ) : (
        <>
          {expenses.map((e) => (
            <Expense expense={e} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpenseList;
