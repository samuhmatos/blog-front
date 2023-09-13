import { Screen } from "@components";
import { SideBarSkeleton } from "@components/Skeleton";
import { FeedSkeleton } from "../../components/Skeleton";

export default function Loading({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="px-2">
        <Screen container>
          <FeedSkeleton />
          <SideBarSkeleton />
        </Screen>
      </div>
    </>
  );
}
