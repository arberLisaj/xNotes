import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/styles.css";

const Layout = () => (
  <>
    <main className="px-2">
      <Navbar />
      <Outlet />
    </main>
  </>
);

export default Layout;
