import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="h-screen px-24 py-16 m-auto">{children}</div>
    </div>
  );
};

export default Layout;
