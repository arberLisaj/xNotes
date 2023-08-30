import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <>
    <main className="px-2 dark:bg-[#23272F] min-h-screen pb-8">
      <Navbar />
      <Outlet />
    </main>
  </>
);

export default Layout;
