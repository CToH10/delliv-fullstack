import React, { useContext } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { toggleLoading } from "../store/loadingSlice";
import { Outlet } from "react-router-dom";
import { setProductList } from "../store/productSlice";

interface ApiContextProps {
  getAllProducts: () => Promise<AxiosResponse<any, any> | undefined>;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);

export const ApiProvider = () => {
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    try {
      dispatch(toggleLoading());
      const products = await (await api.get("products")).data;
      dispatch(setProductList(products));

      return products;
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading());
    }
  };

  return (
    <ApiContext.Provider value={{ getAllProducts }}>
      <Outlet />
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
