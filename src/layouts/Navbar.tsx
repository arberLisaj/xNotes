import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <header className="max-w-full py-4 transition-all border-b">
      <nav className="flex justify-between items-center max-w-[1200px] m-auto">
        <Link to="/" className="text-xl">
          xNotes
        </Link>
        <section className="flex items-center gap-3">
          <button
            className="p-2 text-xl rounded-sm hover:bg-gray-100 active:bg-gray-200"
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
          <button className="p-2 px-5 text-sm text-gray-100 bg-blue-600 rounded-sm hover:bg-blue-500 active:bg-blue-600">
            Log in
          </button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
