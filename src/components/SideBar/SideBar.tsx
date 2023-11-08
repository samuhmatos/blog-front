import { Suspense } from "react";
import { Session } from "./components/Session";
import { SessionSkeleton } from "../Skeleton/SideBarSkeleton/SessionSkeleton";

export async function SideBar() {
  return (
    <div className="w-full flex flex-col mt-3 pt-3 border-t border-gray-300 lg:w-1/4 lg:pt-0 lg:mt-0 lg:border-t-0">
      <Suspense fallback={<SessionSkeleton title="Videos" semiSmall />}>
        <Session title="Videos" semiSmall query="videos" />
      </Suspense>
      <Suspense fallback={<SessionSkeleton title="Populares" />}>
        <Session title="Populares" query="videos" />
      </Suspense>
      <Suspense fallback={<SessionSkeleton title="Reviews" />}>
        <Session title="Reviews" query="videos" />
      </Suspense>
    </div>
  );
}
