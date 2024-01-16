import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { ProductTitle } from "../../Product/ProductTitle";
import { ProductPrice } from "../../Product/ProductPrice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { addToCart, removeFromCart } from "../../../store/cartSlice";

export const ModalCart = () => {
  const currCart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  let initialValue: number = 0;

  if (currCart.length > 0) {
    currCart.forEach((prod) => {
      initialValue += prod.total;
    });
  }

  return (
    <section className="modalContent">
      <h3 className="text-brand-1 text-heading4 font-bold w-full text-center">
        Carrinho
      </h3>
      {currCart.length > 0 ? (
        <>
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-start h-4/5 overflow-auto md:w-[600px] md:items-start md:gap-8">
            {currCart.map((prod) => {
              return (
                <li
                  className="relative border-2 border-brand-2 border-opacity-20 flex flex-col gap-2 w-4/5 md:w-[270px] rounded px-2 py-3"
                  key={prod.id}
                >
                  <ProductTitle title={prod.name} />
                  <ProductPrice price={prod.price} />
                  <h3 className="text-brand-2 text-heading8 font-normal">
                    Quant.: {prod.quantity}
                  </h3>
                  <h3 className="text-brand-2 text-heading8 font-normal">
                    Total: R$ {prod.total}
                  </h3>
                  <button
                    className="absolute top-3 right-1 btn-small btn-alert"
                    onClick={() => {
                      dispatch(removeFromCart({ id: prod.id }));
                    }}
                  >
                    {<FaMinus />}
                  </button>
                  <button
                    className="absolute top-11 right-1 btn-small btn-success"
                    onClick={() => {
                      dispatch(addToCart(prod));
                    }}
                  >
                    {<FaPlus />}
                  </button>
                </li>
              );
            })}
          </ul>
          <h3 className="text-heading6 text-complement-3 font-semibold">
            Total:{" "}
            <span>
              R$
              {" " + initialValue.toString()}
            </span>
          </h3>
        </>
      ) : (
        <h3 className="text-brand-1 text-heading6">Carrinho vazio :(</h3>
      )}
    </section>
  );
};
