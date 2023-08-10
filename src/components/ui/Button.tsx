import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick: () => void;
  tailwindClasses: string;
}

const Button = ({ children, handleClick, tailwindClasses }: Props) => {
  return (
    <button
      className={tailwindClasses + " rounded p-2 px-3"}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
