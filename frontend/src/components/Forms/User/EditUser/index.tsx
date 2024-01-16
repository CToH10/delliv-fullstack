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
      address: {
        cep: currUser?.address.cep,
        state: currUser?.address.state,
        city: currUser?.address.city,
        complement: currUser?.address.complement || "",
        number: currUser?.address.number,
        street: currUser?.address.street,
      },
    },
  });

  const loading = useSelector((state: RootState) => state.loading.loading);

  const onSubmit = (data: TUpdateUser) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start gap-3 w-4/5 h-11/12 overflow-auto"
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
      <div className="flex flex-col gap-3">
        <h2 className="text-body2 text-brand-2 font-semibold">Endereço</h2>
        <Field
          disabled={loading}
          label="CEP"
          placeholder="Digite seu CEP"
          id="address.cep"
          register={register("address.cep")}
          error={errors.address?.cep?.message}
        />
        <Field
          disabled={loading}
          label="Estado"
          placeholder="Digite seu estado"
          id="address.state"
          register={register("address.state")}
          error={errors.address?.state?.message}
        />
        <Field
          disabled={loading}
          label="Cidade"
          placeholder="Digite sua cidade"
          id="address.city"
          register={register("address.city")}
          error={errors.address?.city?.message}
        />
        <Field
          disabled={loading}
          label="Rua"
          placeholder="Digite sua rua"
          id="address.street"
          register={register("address.street")}
          error={errors.address?.street?.message}
        />
        <Field
          disabled={loading}
          label="Número"
          placeholder="Número"
          id="address.number"
          register={register("address.number")}
          error={errors.address?.number?.message}
        />
        <Field
          disabled={loading}
          label="Complemento (opcional)"
          placeholder="Complemento"
          id="address.complement"
          register={register("address.complement")}
          error={errors.address?.complement?.message}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="btn-big font-semibold w-4/5 btn-brand-opacity self-center min-h-14"
      >
        Salvar
      </button>
    </form>
  );
};
