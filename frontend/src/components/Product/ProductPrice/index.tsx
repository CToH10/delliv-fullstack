import React from "react";

export const ProductPrice = ({ price }: { price: string | number }) => {
  return (
    <h4
      className=" font-bold text-heading7 w-[250px] max-w-[250px] text-nowrap text-ellipsis overflow-hidden"
      id="product"
    >
      R$ {price.toString().replace(".", ",")}
    </h4>
  );
};
