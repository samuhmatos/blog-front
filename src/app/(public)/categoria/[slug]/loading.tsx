import { Screen } from "@components";import { SideBarSkeleton } from "@components/Skeleton";
import { FeedSkeleton } from "../../components/Skeleton";

export default function Loading() {
  return (
    <div className="px-2 mt-20">
      <Screen container>
        <FeedSkeleton />
        <SideBarSkeleton />
      </Screen>
    </div>
  );
}
