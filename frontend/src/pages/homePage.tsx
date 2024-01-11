import React, { useEffect } from "react";
import { Layout } from "./layout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useApi } from "../context/apiContext";
import { ProductCard } from "../components/Product/ProductCard";

export const HomePage = () => {
  const productList = useSelector(
    (state: RootState) => state.products.productsInfo.data
  );

  const { getAllProducts } = useApi();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-2 scrollbar overflow-auto">
        {/* <h1 className="text-brand-1 text-body1 font-bold">Welcome home</h1> */}
        {productList.map((product) => {
          return (
            <ProductCard
              name={product.name}
              id={product.id}
              price={product.price}
            />
          );
        })}
      </div>
    </Layout>
  );
};
