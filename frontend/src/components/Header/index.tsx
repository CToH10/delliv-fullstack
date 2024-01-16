import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill, BsCart } from "react-icons/bs";
import {
  IoFastFoodSharp,
  IoPersonAdd,
  IoPerson,
  IoLogOut,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { cartFullQuantity } from "../../utils/cartFullQuantity";
import { useUserCont } from "../../context/userContext";
import { openCart } from "../../store/modalSlice";

export const Header = () => {
  const userToken = useSelector((state: RootState) => state.user.token);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const { logout } = useUserCont();

  return (
    <header className="flex items-center justify-center w-full h-16 border-b-2 border-brand-1 border-opacity-70 mb-4">
      <div className="flex flex-row justify-between items-center w-4/5 max-w-[1100px]">
        <Link
          to={"/"}
          className="text-brand-1 font-semibold text-heading4 w-fit hover:font-bold hover:text-heading3"
        >
          Delliv
        </Link>
        <nav className="w-2/6 max-w-[300px]">
          <ul className="flex flex-row justify-between min-w-full">
            <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition">
              <Link to={"/"}>
                <IoFastFoodSharp />
              </Link>
            </li>
            <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition relative">
              <button onClick={() => dispatch(openCart())}>
                {cart.length > 0 ? <BsCartCheckFill /> : <BsCart />}
              </button>
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
            {userToken && (
              <li className="text-brand-2 font-medium text-heading5 hover:text-brand-3 hover:-translate-y-1 transition">
                <button
                  className="w-full h-full"
                  onClick={() => {
                    logout();
                  }}
                >
                  <IoLogOut />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
