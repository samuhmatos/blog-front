import { Screen, SideBar } from "@components";import { PostSession } from "./components/PostSession";
import { Post, postService } from "@domain";
import { notFound } from "next/navigation";

export interface PostScreenProps {
  params: {
    category: string;
    slug: string;
  };
}

async function getPost(categorySlug: string, postSlug: string): Promise<Post> {
  try {
    return await postService.getBySlug(categorySlug, postSlug);
  } catch (error) {
    notFound();
  }
}

export default async function PostScreen({ params }: PostScreenProps) {
  const post = await getPost(params.category, params.slug);

  return (
    <Screen>
      <PostSession params={params} post={post} />
      <SideBar />
    </Screen>
  );
}
