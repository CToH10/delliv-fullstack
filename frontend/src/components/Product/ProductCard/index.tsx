import React from "react";
import { ProductTitle } from "../ProductTitle";
import { ProductPrice } from "../ProductPrice";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { addToCart, removeFromCart } from "../../../store/cartSlice";

interface Product {
  price: number;
  id: string;
  name: string;
}

export const ProductCard = ({ price, id, name }: Product) => {
  const userToken = useSelector((state: RootState) => state.user.token);
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);

  const isOnCart = () => {
    return -1 === cart.findIndex((prod) => prod.id === id);
  };

  return (
    <section
      className="border-2 border-brand-2 hover:border-brand-1 hover:border-opacity-50 border-opacity-15 rounded-md w-[300px] max-w-[300px] h-[175px] max-h-[175px] flex flex-col justify-around items-center gap-3 hover:text-brand-1 bg-grey-8 hover:bg-grey-9 text-brand-2 text-opacity-50 hover:text-opacity-100"
      id={id}
    >
      <section className="product-info flex flex-col gap-2">
        <ProductTitle title={name} />
        <ProductPrice price={price} />
      </section>
      {userToken && (
        <section className="flex justify-around w-[250px] max-w-[250px]">
          <button
            className="btn-medium btn-success text-heading5"
            onClick={() => {
              dispatch(addToCart({ id, price, name }));
            }}
          >
            <BsFillCartPlusFill />
          </button>
          <button
            className="btn-medium btn-alert text-heading5"
            onClick={() => dispatch(removeFromCart({ id }))}
            disabled={isOnCart()}
          >
            <BsFillCartDashFill />
          </button>
        </section>
      )}
    </section>
  );
};
