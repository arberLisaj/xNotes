import { ReactNode } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  buttonSection: ReactNode;
  linkAddress: string;
}

const PageHeader = ({ title, buttonSection, linkAddress }: Props) => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-[1200px] m-auto flex items-center justify-between my-4">
      {title && <h1 className="text-2xl">{title}</h1>}
      {buttonSection && (
        <Button handleClick={() => navigate(linkAddress)}>
          {buttonSection}
        </Button>
      )}
    </section>
  );
};

export default PageHeader;
