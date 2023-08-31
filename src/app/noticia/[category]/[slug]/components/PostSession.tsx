import { Navigation, NavigationPathType } from "@components";
import { PostScreenProps } from "../page";
import { linkUtils } from "@utils";
import { Post as PostType } from "@domain";
import { Post } from "./Post";
import { Share } from "./Share";
import { NavPost } from ".";
import { Author } from "./Author";
import { Suggestion } from "./Suggestion";

interface Props extends PostScreenProps {
  post: PostType;
}

export function PostSession({ params, post }: Props) {
  var paths: NavigationPathType[] = [
    { slug: "Home", url: "/" },
    { slug: params.category, url: linkUtils.linkCategory(params.category) },
    {
      slug: post.title,
      url: linkUtils.linkPost(post.slug, post.category.name),
    },
  ];

  return (
    <div className="w-full lg:w-3/4">
      <Navigation paths={paths} />

      <Post post={post} />

      <Share title={post.title} subTitle={post.subTitle} />
      {/* <NavPost /> */}
      <Author author={post.author} />
      <Suggestion post={post} />
    </div>
  );
}
