import { twMerge } from "tailwind-merge";
interface FormLayoutProps {
  errorMessage?: string;
  label?: string;
  children: React.ReactNode;
  name: string;
  className?: string;
}

export function FormLayout({
  errorMessage,
  label,
  children,
  className,
  name,
}: FormLayoutProps) {
  return (
    <div className={twMerge("text-gray-900 text-sm", className)}>
      {label && (
        <label className="font-bold block mb-1" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      {errorMessage && (
        <span className="text-red-700 font-semibold">{errorMessage}</span>
      )}
    </div>
  );
}
