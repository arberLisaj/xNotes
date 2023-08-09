import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  title: string;
  buttonSection: ReactNode;
}

const PageHeader = ({ title, buttonSection }: Props) => {
  return (
    <section className="w-full max-w-[1200px] m-auto flex justify-between my-5">
      {title && <h1 className="text-4xl">{title}</h1>}
      {buttonSection && <Button>{buttonSection}</Button>}
    </section>
  );
};

export default PageHeader;
