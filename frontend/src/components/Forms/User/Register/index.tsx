import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "../../../Input/Field";
import { TRegister, registerSchema } from "../../../schemas/userSchemas";

export const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TRegister>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (data: TRegister) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-3 w-full"
    >
      <Field
        label="Nome de usuário"
        placeholder="Digite seu nome de usuário"
        id="username"
        register={register("username")}
        error={errors.username?.message}
      />
      <Field
        label="Nome completo"
        placeholder="Digite seu nome completo"
        id="fullName"
        register={register("fullName")}
        error={errors.fullName?.message}
      />
      <Field
        label="Email"
        placeholder="Digite seu email"
        id="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Field
        type="password"
        label="Senha"
        placeholder="Digite sua senha"
        id="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Field
        type="password"
        label="Confirmação de senha"
        placeholder="Confirme sua senha"
        id="confirmPassword"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-body2 text-brand-2 font-semibold">Endereço</h2>
        <Field
          label="CEP"
          placeholder="Digite seu CEP"
          id="address.cep"
          register={register("address.cep")}
          error={errors.address?.cep?.message}
        />
        <Field
          label="Estado"
          placeholder="Digite seu estado"
          id="address.state"
          register={register("address.state")}
          error={errors.address?.state?.message}
        />
        <Field
          label="Cidade"
          placeholder="Digite sua cidade"
          id="address.city"
          register={register("address.city")}
          error={errors.address?.city?.message}
        />
        <Field
          label="Rua"
          placeholder="Digite sua rua"
          id="address.street"
          register={register("address.street")}
          error={errors.address?.street?.message}
        />
        <Field
          label="Número"
          placeholder="Número"
          id="address.number"
          register={register("address.number")}
          error={errors.address?.number?.message}
        />
        <Field
          label="Complemento (opcional)"
          placeholder="Complemento"
          id="address.complement"
          register={register("address.complement")}
          error={errors.address?.complement?.message}
        />
      </div>
      <button
        type="submit"
        className="btn-big font-semibold w-4/5 btn-brand-opacity self-center"
      >
        Registrar
      </button>
    </form>
  );
};
