import { Footer, Screen, SideBar } from "@components";
import { PostSession } from "./components/PostSession";
import { Post, postService } from "@domain";
import { notFound } from "next/navigation";

export interface PostScreenProps {
  params: {
    category: string;
    slug: string;
  };
}

async function getPost(postSlug: string): Promise<Post> {
  try {
    return await postService.getBySlug(postSlug);
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
