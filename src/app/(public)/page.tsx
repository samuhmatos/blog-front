import { SideBar, Screen } from "@components";
import { Feed, Banner } from "./components/";
import { PageParams } from "@types";

export default function HomeScreen({
  searchParams,
}: PageParams<{
  search: string;
  page: string;
}>) {
  return (
    <div className="px-2">
      <Banner />

      <Screen container>
        <Feed page={searchParams.page} search={searchParams.search} />
        <SideBar />
      </Screen>
    </div>
  );
}
