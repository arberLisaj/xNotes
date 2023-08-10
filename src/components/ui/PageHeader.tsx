import { ReactNode } from "react";
import LinkButton from "./LinkButton";

interface Props {
  title: string;
  buttonSection: ReactNode;
  linkAddress: string;
}

const PageHeader = ({ title, buttonSection, linkAddress }: Props) => {
  return (
    <section className="w-full max-w-[1200px] m-auto flex justify-between my-5">
      {title && <h1 className="text-2xl">{title}</h1>}
      {buttonSection && (
        <LinkButton linkAddress={linkAddress}>{buttonSection}</LinkButton>
      )}
    </section>
  );
};

export default PageHeader;
