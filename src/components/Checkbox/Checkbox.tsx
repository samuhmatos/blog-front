import { Checkbox as CheckboxComponent } from "@mui/material";import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

export interface CheckboxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}
export function Checkbox({
  id,
  checked,
  label,
  onChange,
  className,
  disabled = false,
}: CheckboxProps) {
  return (
    <div className={twMerge("flex items-center cursor-pointer", className)}>
      <CheckboxComponent
        title={label}
        onChange={!disabled ? onChange : () => {}}
        id={id}
        checked={checked}
        disabled={disabled}
      />
      {label && (
        <label htmlFor={id} className="block cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
}
