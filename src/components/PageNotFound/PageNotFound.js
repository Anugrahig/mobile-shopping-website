import React from "react";
import "./PageNotFound.scss";
import PgeNotFound from "../../assets/page_not_found.svg";
const PageNotFound = () => {
  return (
    <div>
      <div className="container">
        <img src={PgeNotFound} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
