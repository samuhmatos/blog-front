import { Screen, SideBar } from "@components";import { PostSession } from "./components/PostSession";
import { PostWithDetails, postService } from "@domain";
import { notFound } from "next/navigation";

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

export default async function PostScreen({ params }: PostScreenProps) {
  const post = await getPost(params.slug);
  return (
    <Screen>
      <PostSession params={params} post={post} />
      <SideBar />
    </Screen>
  );
}
