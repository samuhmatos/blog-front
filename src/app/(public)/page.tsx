import { SideBar, Screen } from "@components";
import { Feed, Banner } from "./components/";

export default function HomeScreen({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="px-2">
        <Banner />

        <Screen container>
          <Feed searchParams={searchParams} />
          <SideBar />
        </Screen>
      </div>
    </>
  );
}
