import React from "react";
import { ProductList } from "../components";
import HeaderHome from "../components/Header/HeaderHome";

const HomePage = () => {
  return (
    <div>
      <HeaderHome />
      <ProductList />
    </div>
  );
};

export default HomePage;
