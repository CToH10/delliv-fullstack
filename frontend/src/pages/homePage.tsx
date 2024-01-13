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
      <ul className="listStyle">
        {productList.map((product) => {
          return (
            <ProductCard
              name={product.name}
              id={product.id}
              price={product.price}
              key={product.id}
            />
          );
        })}
      </ul>
    </Layout>
  );
};
