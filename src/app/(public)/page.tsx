import { SideBar, Screen } from "@components";
import { Feed, Banner } from "./components/";
import { PageParams } from "@types";
import { ErrorMessage } from "../../components/Header/components/ErrorMessage";

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

      <Banner />

      <Screen container>
        <Feed page={searchParams.page} search={searchParams.search} />
        <SideBar />
      </Screen>
    </div>
  );
}
