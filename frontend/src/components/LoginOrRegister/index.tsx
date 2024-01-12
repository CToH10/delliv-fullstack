import React from "react";
import { Link } from "react-router-dom";

export const LoginOrRegisterBox = ({ isLogin }: { isLogin: boolean }) => {
  return isLogin ? (
    <div className="w-4/5 h-fit py-2 m-auto flex flex-col items-center justify-center mt-[35px] bg-grey-8 border-2 border-grey-10 border-opacity-40 rounded-lg">
      <h3 className="text-heading3 text-complement-2 font-semibold">
        Ainda não tem conta?
      </h3>
      <Link to={"/register"} className="text-heading5 text-brand-1 font-bold">
        Registre-se
      </Link>
    </div>
  ) : (
    <div className="w-4/5 h-fit py-2 m-auto flex flex-col items-center justify-center mt-[50px] bg-grey-8 border-2 border-grey-10 border-opacity-40 rounded-lg">
      <h3 className="text-heading3 text-complement-2 font-semibold">
        Já tem conta?
      </h3>
      <Link to={"/login"} className="text-heading5 text-brand-1 font-bold">
        Vá para o login
      </Link>
    </div>
  );
};
