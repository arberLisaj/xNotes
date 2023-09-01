import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

interface Props {
  title: string;
  buttonSection: ReactNode;
  linkAddress: string;
}

const PageHeader = ({ title, buttonSection, linkAddress }: Props) => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-[1100px] m-auto flex items-center justify-between my-4 dark:text-gray-200">
      {title && <h1 className="text-2xl">{title}</h1>}
      {buttonSection && (
        <Button
          title="new"
          type="button"
          handleClick={() => navigate(linkAddress)}
          className="bg-black font-[500] text-white"
        >
          {buttonSection}
        </Button>
      )}
    </section>
  );
};

export default PageHeader;
