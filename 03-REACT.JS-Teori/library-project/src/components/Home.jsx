import React from "react";
import Navi from "./Navi";
import Forms from "./Forms";
import CardList from "./CardList";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navi />
      <Outlet/>
      <CardList />
    </>
  );
};

export default Home;
