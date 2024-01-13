import React, { useContext } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../services/api";
import { TRegister } from "../schemas/userSchemas";
import { toggleLoading } from "../store/loadingSlice";
import { TLogin } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../store/userSlice";
import { RootState } from "../store";
import { jwtDecode } from "jwt-decode";
import { ProductType } from "../utils/@types/productType";

interface JwtPayload {
  identifier: string;
  admin: boolean;
  iat: number | Date;
  exp: number | Date;
  sub: string;
}

export interface AddressType {
  cep: string;
  city: string;
  complement: string | null;
  id: string;
  number: string;
  state: string;
  street: string;
}

export interface userProfile {
  id: string;
  username: string;
  fullName: string;
  email: string;
  admin: boolean;
  address: AddressType;
}

export interface OrderType {
  id: string;
  product_id: string;
  quantity: number;
  priceTotal: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  user_id: string;
  address: AddressType;
  product: ProductType;
}

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  registerUser: (data: TRegister) => Promise<void>;
  login: (data: TLogin) => Promise<void>;
  getUserInfo: (id?: string) => Promise<userProfile | undefined>;
  getUserOrders: () => Promise<any>;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: RootState) => state.user.token);
  const userInfo = token ? (jwtDecode(token) as JwtPayload) : null;

  const headers = {
    headers: { authorization: `Bearer ${token}` },
  };

  const registerUser = async (data: TRegister) => {
    try {
      dispatch(toggleLoading());
      await api.post("users", data);
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoading());
    }
  };

  const login = async (data: TLogin) => {
    try {
      dispatch(toggleLoading());
      const loginToken = await (await api.post("/login", data)).data.token;

      localStorage.setItem("user.token", loginToken);
      dispatch(setUserToken(loginToken));
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(toggleLoading());
    }
  };

  const getUserInfo = async (id?: string): Promise<userProfile | undefined> => {
    try {
      const userProfile = userInfo?.admin
        ? (await api.get(`users/${id}`, headers)).data
        : (await api.get(`users/${userInfo?.sub}`, headers)).data;

      return userProfile;
    } catch (error) {
      console.error(error);
    }
  };

  const getUserOrders = async (): Promise<OrderType[] | undefined> => {
    try {
      const orderList = await (await api.get("orders/user", headers)).data;

      return orderList;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        login,
        getUserInfo,
        getUserOrders,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserCont = () => useContext(UserContext);
