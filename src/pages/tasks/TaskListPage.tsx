import PageHeader from "../../components/ui/PageHeader";
import { BiPlus } from "react-icons/bi";
import TaskTable from "../../features/tasks/TaskTable";
const TaskListPage = () => {
  const task = [
    {
      id: 0,
      title: "do the dishez",
      status: "Done",
      priority: "High",
      category: "Work",
    },
  ];
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
      <TaskTable tasks={task} />
    </section>
  );
};

export default TaskListPage;
