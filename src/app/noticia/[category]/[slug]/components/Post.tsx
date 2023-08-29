import { CategoryBox, PostDetails } from "@components";
import { Post } from "@domain";
import { linkUtils } from "@utils";
import { Share } from "./Share";
import Image from "next/image";
import { Reaction } from ".";

interface Props {
  post: Post;
}
export function Post({ post }: Props) {
  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);
  var linkCategory = linkUtils.linkCategory(post.category.slug);

  return (
    <div>
      <div className="text-center">
        <div className="mt-4">
          <CategoryBox
            categoryName={post.category.name}
            url={linkCategory}
            large
          />
        </div>
        <h1 className="font-extrabold text-4xl my-5">{post.title}</h1>

        <PostDetails
          author={post.author.name}
          date={post.createdAtFormatted}
          linkCategory={linkCategory}
          linkPost={linkPost}
          views={post.views}
          justify="center"
        />

        <Share />

        <main className="mt-6">
          <Image
            src={post.imageURL}
            width={700}
            height={600}
            className="mx-auto"
            alt={`Banner da postagem ${post.title}`}
          />

          <div className="post mt-8">{post.content}</div>

          <Reaction postId={post.id} type="like" />
        </main>
      </div>
    </div>
  );
}
