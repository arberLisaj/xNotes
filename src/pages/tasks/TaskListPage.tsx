import PageHeader from "../../components/ui/PageHeader";
import { BiPlus } from "react-icons/bi";
import ExpenseTable from "../../features/expense/ExpenseTable";
const TaskListPage = () => {
  return (
    <section>
      <PageHeader
        title="Tasks"
        linkAddress="new"
        buttonSection={
          <>
            <BiPlus />
            new
          </>
        }
      />
      <ExpenseTable expenses="" />
    </section>
  );
};

export default TaskListPage;
