import { Metadata } from "next";import { Screen, SideBar } from "@components";
import { PageParams } from "@types";
import { CategoryList } from "./components/CategoryList";
import { Suspense } from "react";
import { FeedSkeleton } from "../components/Skeleton";

export const metadata: Metadata = {
  title: "Categorias",
  description: "Todas as categorias disponíveis para você passar o tempo!",
  abstract: "Todas as categorias disponíveis para você passar o tempo!",
};

interface Props {
  page: number;
}
export default function CategoryScreen({
  searchParams: { page },
}: PageParams<Props>) {
  return (
    <div>
      <Screen container>
        <Suspense fallback={<FeedSkeleton />}>
          <CategoryList page={page} />
        </Suspense>

        <SideBar />
      </Screen>
    </div>
  );
}
