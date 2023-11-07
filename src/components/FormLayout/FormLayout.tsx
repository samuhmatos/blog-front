import { twMerge } from "tailwind-merge";interface FormLayoutProps {
  errorMessage?: string;
  label?: string;
  children: React.ReactNode;
  name: string;
  className?: string;
  bottomRightComponent?: React.ReactNode;
}

export function FormLayout({
  errorMessage,
  label,
  children,
  className,
  name,
  bottomRightComponent,
}: FormLayoutProps) {
  return (
    <div className={twMerge("text-gray-900 text-sm", className)}>
      {label && (
        <label className="font-bold block mb-1" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      <div
        className={twMerge(
          "flex gap-5",
          errorMessage ? "justify-between" : "justify-end"
        )}
      >
        {errorMessage && (
          <span className="text-red-700 font-semibold">{errorMessage}</span>
        )}
        {bottomRightComponent}
      </div>
    </div>
  );
}
