import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
}

const Button = ({ children, handleClick, className }: Props) => {
  return (
    <button
      className={
        className +
        " rounded p-1 px-2 flex items-center gap-1 border border-gray-300 text-sm"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
