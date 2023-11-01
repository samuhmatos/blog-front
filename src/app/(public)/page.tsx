import { SideBar, Screen } from "@components";
import { Feed, Banner } from "./components/";
import { PageParams } from "@types";
import { ErrorMessage } from "../../components/Header/components/ErrorMessage";
import { Suspense } from "react";
import { BannerSkeleton, FeedSkeleton } from "./components/Skeleton";

export default function HomeScreen({
  searchParams,
}: PageParams<{
  search: string;
  page: string;
  error_message: string;
}>) {
  return (
    <div className="px-2 mt-3">
      <ErrorMessage errorMessage={searchParams.error_message} />

      <Suspense fallback={<BannerSkeleton />}>
        <Banner />
      </Suspense>

      <Screen container>
        <Suspense fallback={<FeedSkeleton top />}>
          <Feed page={searchParams.page} search={searchParams.search} />
        </Suspense>

        <SideBar />
      </Screen>
    </div>
  );
}
