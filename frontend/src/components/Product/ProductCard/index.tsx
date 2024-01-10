import React from "react";
import { ProductTitle } from "../ProductTitle";
import { ProductPrice } from "../ProductPrice";

interface Product {
  price: number;
  id: string;
  name: string;
}

export const ProductCard = ({ price, id, name }: Product) => {
  return (
    <section
      className="border-2 border-brand-2 hover:border-brand-1 hover:border-opacity-50 border-opacity-15 rounded-md w-[300px] max-w-[300px] h-[175px] max-h-[175px] flex flex-col justify-around items-center hover:text-brand-1 bg-grey-8 hover:bg-grey-9 text-brand-2 text-opacity-50 hover:text-opacity-100"
      id={id}
    >
      <section className="product-info flex flex-col gap-2">
        <ProductTitle title={name} />
        <ProductPrice price={price} />
      </section>
      <section className="buttons-sect flex justify-around w-[250px] max-w-[250px]">
        <button>Add</button>
        <button>Remove</button>
      </section>
    </section>
  );
};
