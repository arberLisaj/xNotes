import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/styles.css";

const Layout = () => (
  <>
    <main id="main">
      <Navbar />
      <Outlet />
    </main>
  </>
);

export default Layout;
