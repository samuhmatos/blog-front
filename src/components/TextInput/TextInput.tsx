import { HTMLInputTypeAttribute } from "react";
interface Props {
  text: string;
  setText: (value: string) => void;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  id?: string;
}

export function TextInput({
  text,
  setText,
  type = "text",
  placeholder,
  required = false,
  id,
}: Props) {
  return (
    <input
      type={type}
      className="py-2 px-5 w-full max-w-sm text-gray-700 rounded-lg"
      placeholder={placeholder}
      value={text}
      onChange={(e) => setText(e.target.value)}
      required={required}
      id={id}
    />
  );
}
