import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

import { Screen, SideBar } from "@components";

import { PostSession, getPost } from "./components/PostSession";

// export const revalidate = 3600;
export interface PostScreenProps {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata(
  { params }: PostScreenProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.subTitle,
    abstract: post.subTitle,
  };
}

export default function PostScreen({ params }: PostScreenProps) {
  return (
    <div>
      <Screen className="mt-5">
        <Suspense
          fallback={
            <div className="flex-1 bg-gray-400 rounded animate-pulse"></div>
          }
        >
          <PostSession postSlug={params.slug} />
        </Suspense>
        <SideBar />
      </Screen>
    </div>
  );
}
