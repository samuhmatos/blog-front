import { SessionSkeleton } from "./SessionSkeleton";
export function SideBarSkeleton() {
  return (
    <div className="w-full flex flex-col mt-3 pt-3 border-t border-gray-300 lg:w-1/4 lg:pt-0 lg:mt-0 lg:border-t-0">
      <SessionSkeleton title="Videos" semiSmall />
      <SessionSkeleton title="Populares" />
      <SessionSkeleton title="Reviews" />
    </div>
  );
}
