import { ReactNode } from "react";import { twMerge } from "tailwind-merge";
interface Props {
  children: ReactNode;
  container?: boolean;
  className?: string;
}

export function Screen({ children, container = true, className }: Props) {
  return (
    <main>
      <div
        className={twMerge(
          `${container ? "container" : ""} m-auto mt-10 px-3`,
          className
        )}
      >
        <div className="flex justify-center gap-5 flex-wrap  max-w-xl mx-auto md:max-w-full lg:flex-nowrap">
          {children}
        </div>
      </div>
    </main>
  );
}
