import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface Props {
  children: ReactNode;
  linkAddress: string;
  tailwindClasses?: string;
}
const LinkButton = ({ children, linkAddress, tailwindClasses }: Props) => {
  return (
    <Link
      to={linkAddress}
      className={
        "flex items-center gap-1 p-2 px-4 text-sm border w-fit roudned hover:bg-gray-100 active:opacity-75" +
        " " +
        tailwindClasses
      }
    >
      {children}
    </Link>
  );
};

export default LinkButton;
