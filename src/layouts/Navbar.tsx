import DarkMode from "@/components/DarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="max-w-full py-2 sticky top-0 dark:text-gray-200 border-b dark:border-slate-700 bg-white dark:bg-gray-900  shadow-md">
      <nav className="flex justify-between items-center max-w-[1100px] m-auto">
        <Link to="/" className="text-xl">
          xNotes
        </Link>
        <div className="flex items-center gap-2">
          <DarkMode />
          <NavLink to="tasks" className="link">
            Task Board
          </NavLink>
          <NavLink to="expenses" className="link">
            Expenses
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
