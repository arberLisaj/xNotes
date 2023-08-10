import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  title: string;
  buttonSection: ReactNode;
  linkAddress: string;
}

const PageHeader = ({ title, buttonSection, linkAddress }: Props) => {
  return (
    <section className="w-full max-w-[1200px] m-auto flex justify-between my-5">
      {title && <h1 className="text-3xl">{title}</h1>}
      {buttonSection && (
        <Button linkAddress={linkAddress}>{buttonSection}</Button>
      )}
    </section>
  );
};

export default PageHeader;
