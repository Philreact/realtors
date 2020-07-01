import React from "react";
import classes from "./Layout.module.scss";
import SideBar from "../../components/SideBar/SideBar";

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <body className={classes["container"]}>
      <SideBar />

      {props.children}
    </body>
  );
};

export default Layout;
