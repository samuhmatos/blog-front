import { Screen, SideBar } from "@components";
import { PostSession } from "./components/PostSession";
import { PostWithDetails, postService } from "@domain";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

export interface PostScreenProps {
  params: {
    category: string;
    slug: string;
  };
}

async function getPost(postSlug: string): Promise<PostWithDetails> {
  try {
    return await postService.getOne(postSlug);
  } catch (error: any) {
    notFound();
  }
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

export default async function PostScreen({ params }: PostScreenProps) {
  const post = await getPost(params.slug);

  return (
    <div className="mt-24">
      <Screen>
        <PostSession params={params} post={post} />
        <SideBar />
      </Screen>
    </div>
  );
}
