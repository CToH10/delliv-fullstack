import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { TLogin, loginSchema } from "../../../../schemas/loginSchema";
import { Field } from "../../../Input/Field";
import { useUserCont } from "../../../../context/userContext";

export const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const { login } = useUserCont();

  const loading = useSelector((state: RootState) => state.loading.loading);

  const onSubmit = (data: TLogin) => {
    console.log(data);
    login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-3 w-full"
    >
      <Field
        disabled={loading}
        label="Nome de usuário ou email"
        placeholder="Digite seu nome de usuário ou senha"
        id="identifier"
        register={register("identifier")}
        error={errors.identifier?.message}
      />
      <Field
        disabled={loading}
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <button
        disabled={loading}
        type="submit"
        className="btn-big font-semibold w-4/5 btn-brand-opacity self-center"
      >
        Entrar
      </button>
    </form>
  );
};
