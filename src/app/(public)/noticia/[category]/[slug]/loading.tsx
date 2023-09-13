import { Footer, Screen } from "@components";
import { SideBarSkeleton } from "@components/Skeleton";

export default function Loading() {
  return (
    <Screen>
      <div className="flex-1 bg-gray-400 rounded animate-pulse"></div>
      <SideBarSkeleton />
    </Screen>
  );
}
