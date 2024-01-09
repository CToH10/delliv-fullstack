import { UseFormRegisterReturn } from "react-hook-form";

export interface FieldProps {
  type?: string | undefined;
  placeholder: string;
  label: string;
  id: string;
  register?: UseFormRegisterReturn | undefined;
  disabled?: boolean | undefined;
  className?: string | undefined;
  error?: string | undefined;
}
