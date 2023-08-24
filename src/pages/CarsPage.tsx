import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { CarForm, CarList } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Pagination } from "@mui/material";
import { carActions } from "../redux/slices/carsSlice";

const CarsPage = () => {
  const { isLoading } = useAppSelector((state) => state.cars); //todo
  console.log(isLoading);

  const dispatch = useAppDispatch();
  const cars = useAppSelector(state => state.cars.cars);

  useEffect(() => {
      dispatch(carActions.getAll());
  }, [dispatch]);

  return (
    <div>
      <Outlet />
      <CarForm />
      <CarList />
      {/* <Pagination count={10} showFirstButton showLastButton /> */}
    </div>
  );
};

export default CarsPage;
