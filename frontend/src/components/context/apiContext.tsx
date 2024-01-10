import React from "react";
import { createContext } from "react";
import { api } from "../../services/api";
import { AxiosResponse } from "axios";


interface ApiContextProps {
  getAllProducts: () => Promise<AxiosResponse<any, any> | undefined>;
}

export const ApiContext = createContext<ApiContextProps>({} as ApiContextProps);

export const ApiProvider = () => {
  const getAllProducts = async () => {
    try {
      const ideas = await api.get("products");

      return ideas;
    } catch (error) {
      console.log(error);
    } finally {
        
    }
  };

  return <ApiContext.Provider value={{ getAllProducts }}></ApiContext.Provider>;
};
