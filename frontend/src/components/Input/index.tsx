import React from "react";
import { FieldProps } from "./Field/iField";
import { Field } from "./Field";
import { Label } from "./Label";
import { FieldSet } from "./Fieldset";

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  className,
  disabled,
  error,
}: FieldProps) => {
  console.log(error);
  
  return (
    <FieldSet>
      <Label id={id} label={label} />
      <Field
        type={type}
        placeholder={placeholder}
        label={label}
        id={id}
        aria-label={placeholder}
        register={register}
        className={className ? className : ""}
        disabled={disabled ? disabled : false}
        error={error}
      />
    </FieldSet>
  );
};
