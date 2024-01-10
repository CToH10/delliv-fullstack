import React from "react";
import Tippy from "@tippy.js/react";

export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <Tippy
      content={title}
      className="bg-brand-4 py-1 px-2 rounded font-bold text-complement-3 border-2 border-brand-1 border-opacity-15"
    >
      <h3
        className="text-brand-1 text-opacity-50 hover:text-opacity-100 font-bold text-heading5 w-[250px] max-w-[250px] text-nowrap text-ellipsis overflow-hidden"
        id="product"
      >
        {title}
      </h3>
    </Tippy>
  );
};
