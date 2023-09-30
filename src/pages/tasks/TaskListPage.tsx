import PageHeader from "../../components/PageHeader";
import { BiPlus } from "react-icons/bi";
import TaskTable from "../../features/tasks/TaskTable";
const TaskListPage = () => {
  return (
    <section>
      <PageHeader
        title="My tasks"
        linkAddress="new"
        buttonSection={
          <>
            <BiPlus className="text-base" />
            new
          </>
        }
      />
      <TaskTable />
    </section>
  );
};

export default TaskListPage;
