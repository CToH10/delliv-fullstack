import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../../../Input/Field";
import { TUpdateUser, updateUserSchema } from "../../../../schemas/userSchemas";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";

export const EditUserForm = () => {
  const currUser = useSelector((state: RootState) => state.loading.userInfo);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TUpdateUser>({
    resolver: zodResolver(updateUserSchema),
    mode: "onBlur",
    defaultValues: {
      email: currUser?.email,
      fullName: currUser?.fullName,
      username: currUser?.username,
    },
  });

  const loading = useSelector((state: RootState) => state.loading.loading);

  const onSubmit = (data: TUpdateUser) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-3 w-4/5 h-4/5 overflow-auto"
    >
      <Field
        disabled={loading}
        label="Nome de usuário"
        placeholder="Digite seu nome de usuário"
        id="username"
        register={register("username")}
        error={errors.username?.message}
      />
      <Field
        disabled={loading}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        id="fullName"
        register={register("fullName")}
        error={errors.fullName?.message}
      />
      <Field
        disabled={loading}
        label="Email"
        placeholder="Digite seu email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <button
        disabled={loading}
        type="submit"
        className="btn-big font-semibold w-4/5 btn-brand-opacity self-center"
      >
        Salvar alterações
      </button>
    </form>
  );
};
