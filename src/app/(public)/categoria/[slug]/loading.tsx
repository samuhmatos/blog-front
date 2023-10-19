import { Screen } from "@components";
import { SideBarSkeleton } from "@components/Skeleton";
import { FeedSkeleton } from "../../components/Skeleton";
import { CategoryHeaderSkeleton } from "./components/Skeleton/CategoryHeaderSkeleton";

export default function Loading() {
  return (
    <div className="-mt-1">
      <CategoryHeaderSkeleton />
      <Screen container>
        <FeedSkeleton />
        <SideBarSkeleton />
      </Screen>
    </div>
  );
}
