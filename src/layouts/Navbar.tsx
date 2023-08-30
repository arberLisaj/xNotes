import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import useStore from "../store";

const Navbar = () => {
  const { darkMode, setDarkMode } = useStore();
  const toggleDarkMode = () => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);

  return (
    <header className="max-w-full py-2 sticky top-0 dark:text-gray-200 bg-white dark:bg-gray-800 shadow-md">
      <nav className="flex justify-between items-center max-w-[1100px] m-auto">
        <Link to="/" className="text-xl">
          xNotes
        </Link>
        <section className="flex items-center gap-3">
          <NavLink to="tasks" className="link">
            Task Board
          </NavLink>
          <NavLink to="expenses" className="link">
            Expenses
          </NavLink>
          <button
            tabIndex={4}
            title="document"
            type="button"
            className="p-2 text-xl rounded-sm hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setDarkMode()}
          >
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
