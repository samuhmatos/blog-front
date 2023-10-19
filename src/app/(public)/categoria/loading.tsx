import { Screen } from "@components";import { SideBarSkeleton } from "@components/Skeleton";
import { FeedSkeleton } from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="-mt-1">
      <Screen container>
        <FeedSkeleton />
        <SideBarSkeleton />
      </Screen>
    </div>
  );
}
