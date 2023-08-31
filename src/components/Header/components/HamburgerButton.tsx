import { Dispatch, SetStateAction } from "react";
interface Props {
  setIsDropDown: Dispatch<SetStateAction<boolean>>;
}

export function HamburgerButton({ setIsDropDown }: Props) {
  return (
    <button
      className="mr-2 lg:hidden"
      type="button"
      onClick={() => setIsDropDown((value) => !value)}
    >
      <div className="flex">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-zinc-100 animate-pulse"></span>
        </div>
      </div>
    </button>
  );
}
