import PageHeader from "../../components/PageHeader";
import { MdOutlineArrowBack } from "react-icons/md";
import TaskForm from "../../features/tasks/TaskForm";
const NewTaskPage = () => {
  return (
    <section className="max-w-[1100px] m-auto">
      <PageHeader
        title={"Create Task"}
        buttonSection={
          <>
            <MdOutlineArrowBack /> back
          </>
        }
        linkAddress={"/tasks"}
      />
      <TaskForm />
    </section>
  );
};

export default NewTaskPage;
