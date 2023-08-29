import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  container?: boolean;
}

export function Screen({ children, container = true }: Props) {
  return (
    <main>
      <div className={`${container ? "container" : ""} m-auto mt-10`}>
        <div className="flex justify-center gap-4 flex-wrap  max-w-xl mx-auto md:max-w-full lg:flex-nowrap">
          {children}
        </div>
      </div>
    </main>
  );
}
