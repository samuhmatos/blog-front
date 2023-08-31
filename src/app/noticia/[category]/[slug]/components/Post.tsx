"use client";
import { CategoryBox, PostDetails } from "@components";
import { Post, postService } from "@domain";
import { linkUtils } from "@utils";
import { Share } from "./Share";
import Image from "next/image";
import { Reaction } from ".";
import { useEffect, useState } from "react";

interface Props {
  post: Post;
}
export function Post({ post }: Props) {
  const [views, setViews] = useState<number>(post.views);

  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);
  var linkCategory = linkUtils.linkCategory(post.category.slug);

  async function addNewView() {
    try {
      const response = await postService.addView(post.id);
      setViews(response.views);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      addNewView();
    }, 10000);
  }, []);

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
          views={views}
          justify="center"
        />

        <Share title={post.title} subTitle={post.subTitle} />

        <main className="mt-6">
          <Image
            src={post.imageURL}
            width={700}
            height={600}
            className="mx-auto"
            alt={`Banner da postagem ${post.title}`}
          />

          <div className="post mt-8">{post.content}</div>

          <Reaction postId={post.id} />
        </main>
      </div>
    </div>
  );
}
