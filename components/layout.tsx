import React from "react";
import Nav from "./nav";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="px-24 py-16 ">{children}</div>
    </div>
  );
};

export default Layout;
