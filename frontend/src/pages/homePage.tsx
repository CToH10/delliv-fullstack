import React from "react";
import { Layout } from "./layout";
import { ProductCard } from "../components/Product/ProductCard";

export const HomePage = () => {
  return (
    <Layout>
      <div className="w-4/5 h-[160px] m-auto flex flex-col items-center justify-center mt-[45px] scrollbar">
        <h1 className="text-brand-1 text-body1 font-bold">Welcome home</h1>
        <ProductCard id="sdkjbfad" name="Product not found" price={59.45} />
      </div>
    </Layout>
  );
};
