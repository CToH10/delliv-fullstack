import React from "react";
// import { Link } from "react-router-dom";
import { BsBagHeartFill } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="flex flex-row justify-around w-full items-center h-16 border-b-2 border-brand-1 border-opacity-70  mb-24">
      {/* <Link to={<Home}>Delliv</Link> */}
      <h1 className="text-brand-1 font-semibold text-heading4 w-2/5">Delliv</h1>
      <nav className="w-1/4">
        <ul className="flex flex-row justify-between">
          <li className="text-brand-2 font-medium text-heading5">
            <IoFastFoodSharp />
          </li>
          <li className="text-brand-2 font-medium text-heading5">
            <BsBagHeartFill />
          </li>
          <li className="text-brand-2 font-medium text-heading5">
            <IoPerson />
          </li>
        </ul>
      </nav>
    </header>
  );
};
