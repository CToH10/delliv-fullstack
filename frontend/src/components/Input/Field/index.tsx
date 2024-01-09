import React from "react";
import { FieldProps } from "./iField";

export const Field = ({
  type = "text",
  placeholder,
  id,
  register,
  disabled,
  className,
}: FieldProps) => {
  return (
    <>
        <input 
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          aria-label={placeholder}
          // {...register}
          disabled={disabled}
          className={className}
        />
    </>
  );
};
