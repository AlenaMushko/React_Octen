import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components";
import { useAppSelector } from "../hooks/reduxHooks";
import { LinearProgress } from "@mui/material";

export const Layout = () => {
  const { isLoading } = useAppSelector((state) => state.cars);
  console.log(isLoading);
  return (
    <div>
      <Header />
      <Outlet />
      {/* {isLoading ? <LinearProgress /> : <Outlet />} */}
    </div>
  );
};
