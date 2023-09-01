import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
  type: "submit" | "reset" | "button";
  title: string;
}

const Button = ({ children, handleClick, className, type, title }: Props) => {
  return (
    <button
      type={type}
      title={title}
      className={
        className +
        " rounded p-1 px-2 flex items-center border-none gap-1 text-sm dark:bg-gray-700"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
