import useStore from "@/store";
import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const DarkMode = () => {
  const { darkMode, setDarkMode } = useStore();

  const toggleDarkMode = () => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    toggleDarkMode();
  }, [darkMode]);

  return (
    <button
      title="darkMode"
      type="button"
      className="p-2 text-[18px] rounded-sm hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-700"
      onClick={() => setDarkMode()}
    >
      {darkMode ? <BsMoon className="text-base" /> : <BsSun />}
    </button>
  );
};

export default DarkMode;
