import Form from "../../components/ui/Form";
import PageHeader from "../../components/ui/PageHeader";
import { MdOutlineArrowBack } from "react-icons/md";
const NewTaskPage = () => {
  return (
    <section className="max-w-[1200px] m-auto">
      <PageHeader
        title={"Create"}
        buttonSection={
          <>
            <MdOutlineArrowBack /> Back
          </>
        }
        linkAddress={"/"}
      />
      <Form />
    </section>
  );
};

export default NewTaskPage;
