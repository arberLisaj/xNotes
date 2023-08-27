import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <>
    <main className="px-2 dark:bg-[#23272F] h-screen dark:text-white">
      <Navbar />
      <Outlet />
    </main>
  </>
);

export default Layout;
