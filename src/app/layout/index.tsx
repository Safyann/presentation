import { Outlet } from "react-router-dom";

import "~/shared/assets/styles/globals.scss";

export const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
