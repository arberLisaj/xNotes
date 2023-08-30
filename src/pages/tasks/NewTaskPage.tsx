import PageHeader from "../../components/ui/PageHeader";
import { MdOutlineArrowBack } from "react-icons/md";
import TaskForm from "../../features/tasks/TaskForm";
const NewTaskPage = () => {
  return (
    <section className="max-w-[1100px] m-auto">
      <PageHeader
        title={"Create Task"}
        buttonSection={
          <>
            <MdOutlineArrowBack/> Back
          </>
        }
        linkAddress={"/"}
      />
      <TaskForm />
    </section>
  );
};

export default NewTaskPage;
