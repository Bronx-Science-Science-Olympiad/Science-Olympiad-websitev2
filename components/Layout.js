import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="m-auto w-[56.5%] h-screen">{children}</div>
    </div>
  );
};

export default Layout;
