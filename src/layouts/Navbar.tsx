import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="py-4 max-w-full border-b">
      <nav className="flex justify-between px-3 items-center max-w-[1350px] m-auto">
        <Link to="/" className="text-xl">
          xNotes
        </Link>
        <section className="flex items-center gap-3">
          <button
            className="transition-all p-[9px] rounded-sm hover:bg-gray-100 active:bg-gray-200 text-lg mr-[-5px]"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>

          <NavLink to="tasks" className="link">
            Task Board
          </NavLink>
          <NavLink to="expenses" className="link">
            Expenses
          </NavLink>
          <button className="text-sm p-2 bg-blue-600 text-gray-100 rounded-sm px-5  hover:bg-blue-500 active:bg-blue-600">
            Log in
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;