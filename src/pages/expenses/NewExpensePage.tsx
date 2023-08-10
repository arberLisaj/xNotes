import PageHeader from "../../components/ui/PageHeader";
import { MdOutlineArrowBack } from "react-icons/md";
import ExpenseForm from "../../features/expense/ExpenseForm";
const NewExpensePage = () => {
  return (
    <section>
      <PageHeader
        title="Create Expense"
        buttonSection={
          <>
            <MdOutlineArrowBack />
            back
          </>
        }
        linkAddress="/expenses"
      />
      <ExpenseForm />
    </section>
  );
};

export default NewExpensePage;
