import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const button = ({ children }: Props) => {
  return (
    <button className="border text-sm p-2 roudned px-4 hover:bg-gray-100 active:bg-white">
      {children}
    </button>
  );
};

export default button;
