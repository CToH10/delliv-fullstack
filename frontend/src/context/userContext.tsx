import React, { useContext } from "react";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import { api } from "../services/api";
import { TRegister } from "../schemas/userSchemas";
import { toggleLoading } from "../store/loadingSlice";
import { TLogin } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import { setUserToken } from "../store/userSlice";

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
  registerUser: (data: TRegister) => Promise<void>;
  login: (data: TLogin) => Promise<void>;
}

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export const UserProvider = ({ children }: UserProviderProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <UserContext.Provider
      value={{
        registerUser,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserCont = () => useContext(UserContext);
