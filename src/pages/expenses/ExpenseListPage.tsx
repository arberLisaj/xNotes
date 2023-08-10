import { BiPlus } from "react-icons/bi";
import PageHeader from "../../components/ui/PageHeader";
import ExpenseList from "../../features/expense/ExpenseList";

const ExpenseListPage = () => {
  return (
    <section>
      <PageHeader
        title="Expenses"
        linkAddress="new"
        buttonSection={
          <>
            <BiPlus />
            new
          </>
        }
      />
      <ExpenseList />
    </section>
  );
};

export default ExpenseListPage;
