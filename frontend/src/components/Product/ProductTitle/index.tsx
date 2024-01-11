import React from "react";
import Tippy from "@tippy.js/react";

export const ProductTitle = ({ title }: { title: string }) => {
  return (
    <Tippy
      content={title}
      className="bg-brand-4 py-1 px-2 rounded font-bold text-complement-3 border-2 border-brand-1 border-opacity-15"
    >
      <h3
        className="font-bold text-heading5 w-min max-w-[250px] text-nowrap text-ellipsis overflow-hidden text-brand-1"
        id="product"
      >
        {title}
      </h3>
    </Tippy>
  );
};
