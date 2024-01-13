import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill, BsCart } from "react-icons/bs";
import { IoFastFoodSharp, IoPersonAdd, IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { cartFullQuantity } from "../../utils/cartFullQuantity";

export const Header = () => {
  const userToken = useSelector((state: RootState) => state.user.token);
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <header className="flex flex-row justify-around w-full items-center h-16 border-b-2 border-brand-1 border-opacity-70 mb-4">
      <Link
        to={"/"}
        className="text-brand-1 font-semibold text-heading4 w-2/5 hover:font-bold hover:text-heading3"
      >
        Delliv
      </Link>
      <nav className="w-1/4">
        <ul className="flex flex-row justify-between">
          <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition">
            <Link to={"/"}>
              <IoFastFoodSharp />
            </Link>
          </li>
          <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition relative">
            {cart.length > 0 ? <BsCartCheckFill /> : <BsCart />}
            {cart.length > 0 && (
              <span className="absolute -top-3 left-3 rounded-full bg-brand-4 z-10 text-heading8 px-2 py-1 font-bold">
                {cartFullQuantity(cart)}
              </span>
            )}
          </li>
          <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition">
            {userToken ? (
              <Link to={"/profile"}>
                <IoPerson />
              </Link>
            ) : (
              <Link to={"/login"}>
                <IoPersonAdd />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
