import React from "react";
import "./LogoSearch.css";
import UilSearch from "@iconscout/react-unicons/icons/uil-search";
import Logo from "../../../img/logo.png";
const LogoSearch = () => {
  return (
    <div className="logo">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="#Example" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
