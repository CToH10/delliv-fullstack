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
      <div className="w-4/5 m-auto flex flex-col items-center justify-center gap-2 scrollbar overflow-auto lg:grid lg:grid-cols-2 lg:col-span-2 lg:columns-2 lg:place-items-center lg:gap-y-12 lg:gap-x-0">
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
