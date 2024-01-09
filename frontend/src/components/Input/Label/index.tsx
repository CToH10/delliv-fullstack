import React from "react";

interface LabelProps {
  id: string;
  label: string;
}

export const Label = ({ id, label }: LabelProps) => {
  return (
    <label htmlFor={id} className="font-normal text-inputLabel text-brand-1">
      {label}
    </label>
  );
};
