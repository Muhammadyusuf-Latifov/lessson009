import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { FiSearch } from "react-icons/fi";
import { PiMoneyWavy } from "react-icons/pi";
import { IoDocumentOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="border-b border-b-[#ddd] shadow">
      <nav className="container mx-auto py-[8px] flex items-center justify-between">
        <NavLink to={"/"}>
          <img
            className="block w-[120px] h-[100px]  rounded-[50%] "
            src={logo}
            alt=""
          />
        </NavLink>
        <div className="flex items-center gap-[20px] text-[20px]">
          <FiSearch />
          <PiMoneyWavy />
          <IoDocumentOutline />
        </div>
        <NavLink
          className="text-[18px] font-medium text-[#024082] hover:underline"
          to={"/create"}
        >
          Create car
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
