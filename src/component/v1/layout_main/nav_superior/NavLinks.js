import React from "react";


export const Nav = ({ children, scrollNav }) => {
  const background = scrollNav ? "lp-bg2" : "lp-bg1";
  return (
    <nav
      className={`${background} col-md-12 col-sm-12 py-4 px-0 d-flex justify-content-center position-fixed lpNavSuperior navbar navbar-expand-md`}
    >
      {children}
    </nav>
  );
};

