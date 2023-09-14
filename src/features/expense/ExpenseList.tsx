import useStore from "@/store";
import Expense from "./Expense";

const ExpenseList = () => {
  const expenses = useStore((store) => store.expenses);
  return (
    <div className="w-full max-w-[1100px] m-auto flex gap-4 flex-wrap">
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
