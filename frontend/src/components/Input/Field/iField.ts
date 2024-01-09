import { UseFormRegisterReturn } from "react-hook-form";

export interface FieldProps {
  type?: string;
  placeholder: string;
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  className?: string;
  error?: string;
}
