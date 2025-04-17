import React from "react";
import { NavLink } from "react-router";

const NavReusable = ({ to, name, icon: Icon }) => {
  return (
    <>
      <li>
        <NavLink
          to={to}
          className="group pl-[7px] pr-2 py-2 bg-[#f7f5ff] hover:bg-Main_Hv duration-700 font-Montserrat font-medium uppercase text-sm text-Main_Tx hover:text-white text-center cursor-pointer"
        >
          {Icon && (
            <Icon className="my-1.5 ml-9 mr-[35px] lgx:text-2xl text-[28px] text-Main_Tx duration-500 group-hover:text-white" />
          )}
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default NavReusable;
