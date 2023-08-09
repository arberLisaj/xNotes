import { Link } from "react-router-dom";
import PageHeader from "../../components/ui/PageHeader";
import { BiPlus } from "react-icons/bi";
import ExpenseTable from "../../features/expense/ExpenseTable";
const TaskListPage = () => {
  return (
    <section>
      <PageHeader
        title="Tasks"
        buttonSection={
          <Link to="new" className="flex items-center gap-1">
            <BiPlus />
            new
          </Link>
        }
      />
      <ExpenseTable />
    </section>
  );
};

export default TaskListPage;
