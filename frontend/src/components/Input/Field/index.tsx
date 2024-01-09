import React from "react";
import { FieldProps } from "./iField";
import { Label } from "../Label";

export const Field = ({
  type = "text",
  placeholder,
  id,
  register,
  disabled,
  className,
  label,
  error,
}: FieldProps) => {
  return (
    <>
      <Label id={id} label={label} />
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        aria-label={placeholder}
        {...register}
        disabled={disabled}
        className={className}
      />
      {error && <p className="error">{error}</p>}
    </>
  );
};
