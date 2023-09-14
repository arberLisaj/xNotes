import PageHeader from "@/components/PageHeader";
import ExpenseList from "@/features/expense/ExpenseList";
import { BiPlus } from "react-icons/bi";

const ExpenseListPage = () => {
  return (
    <section>
      <PageHeader
        title="Expenses"
        linkAddress="new"
        buttonSection={
          <>
            <BiPlus className="text-base" />
            new
          </>
        }
      />
      <ExpenseList />
    </section>
  );
};

export default ExpenseListPage;
