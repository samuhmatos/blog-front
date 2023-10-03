import { Breadcrumb, BreadcrumbPathType } from "@components";import { PostScreenProps } from "../page";
import { linkUtils } from "@utils";
import { PostWithDetails } from "@domain";
import { Post } from "./Post";
import { Share } from "./Share";
import { NavPost } from ".";
import { Author } from "./Author";
import { Suggestion } from "./Suggestion";
import { Comment } from "./Comment/Comment";
import { CommentProvider } from "@context";

interface Props extends PostScreenProps {
  post: PostWithDetails;
}

export function PostSession({ params, post }: Props) {
  var paths: BreadcrumbPathType[] = [
    { slug: "Home", url: "/" },
    { slug: post.category.name, url: linkUtils.linkCategory(params.category) },
    {
      slug: post.title,
      url: linkUtils.linkPost(post.slug, post.category.slug),
    },
  ];

  return (
    <div className="w-full lg:w-3/4">
      <Breadcrumb paths={paths} />

      <Post post={post} />

      <Share title={post.title} subTitle={post.subTitle} />
      {/* <NavPost /> */}
      <Author author={post.author} />
      <Suggestion post={post} />

      <CommentProvider>
        <Comment comments={post.comments!} postId={post.id} />
      </CommentProvider>
    </div>
  );
}
