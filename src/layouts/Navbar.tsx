import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const Navbar = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "");
  const toggleDarkMode = () => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);

  return (
    <header className="max-w-full py-2 border-b dark:border-gray-500">
      <nav className="flex justify-between items-center max-w-[1200px] m-auto">
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
            className="p-2 text-xl rounded-sm hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
