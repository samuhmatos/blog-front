import { Footer, Screen } from "@components";
import { SideBarSkeleton } from "@components/Skeleton";
import { BannerSkeleton, FeedSkeleton } from "./components/Skeleton";

export default function Loading() {
  return (
    <div className="px-2">
      <BannerSkeleton />

      <Screen container>
        <FeedSkeleton top />
        <SideBarSkeleton />
      </Screen>
    </div>
  );
}
