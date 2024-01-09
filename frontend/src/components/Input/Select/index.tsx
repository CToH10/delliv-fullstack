import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Label } from "../Label";
import { FieldSet } from "../Fieldset";

interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: {
    value: string;
    text: string;
  }[];
  placeholder: string;
  id: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  className?: string;
  label: string;
  error?: string;
  selOptions?: string[];
  // setSelOptions: React.Dispatch<React.SetStateAction<string[]>>;
}
export const Select = ({
  options,
  placeholder,
  id,
  register,
  disabled,
  className,
  label,
  error,
}: SelectProps) => {
  return (
    <FieldSet>
      <Label id={id} label={label} />
      <select
        name={id}
        id={id}
        // {...register}
        disabled={disabled}
        className={`${className}`}
        aria-label={label}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => {
          return (
            <option
              value={opt.value}
              key={opt.value}
              aria-label={`Opção: ${opt.text}`}
            >
              {opt.text}
            </option>
          );
        })}
      </select>
      {error ? <p>{error}</p> : <></>}
    </FieldSet>
  );
};
