import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 overflow-x-auto">{children}</div>
    </div>
  );
};

export default Layout;
