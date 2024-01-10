import React, { useContext } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import { TRegister } from "../schemas/userSchemas";
import { toggleLoading } from "../store/loadingSlice";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  registerUser: (data: TRegister) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const dispatch = useDispatch();

  const registerUser = async (data: TRegister) => {
    try {
      dispatch(toggleLoading());
      await api.post("users", data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(toggleLoading());
    }
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserCont = () => useContext(UserContext);
