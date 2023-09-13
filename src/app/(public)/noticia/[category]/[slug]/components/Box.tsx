import { ReactNode } from "react";interface Props {
  children: ReactNode;
  title?: string;
}
export function Box({ children, title }: Props) {
  return (
    <div
      className={`${
        title ? "pb-5" : "py-5"
      } border border-gray-200 border-dashed px-5 mt-20`}
    >
      {title && (
        <h4 className="py-3 px-6 bg-gray-300 text-center font-bold mb-4 -mt-6">
          {title}
        </h4>
      )}

      {children}
    </div>
  );
}
