import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Outlet /> {/* This renders the current page content */}
      <Footer />  {/* Footer always appears at the bottom */}
    </div>
  );
};

export default Layout;