
import ScrollToTop from "react-scroll-to-top";

import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
      <div className="scroll">
        <ScrollToTop smooth />
      </div>
    </>
  );
};

export default Layout;
