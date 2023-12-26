"use client";import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import { CategoryBox, PostDetails } from "@components";
import { PostWithDetails, postService } from "@domain";
import { linkUtils } from "@utils";

import { Share } from "./Share";
import { Reaction } from ".";

const Editor = dynamic(() => import("@/components/Editor/ReadOnlyEditor"), {
  ssr: false,
});

interface Props {
  post: PostWithDetails;
}
export function Post({ post }: Props) {
  const [views, setViews] = useState<number>(post.views);

  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);
  var linkCategory = linkUtils.linkCategory(post.category.slug);

  async function addNewView() {
    try {
      const response = await postService.addView(post.id);
      setViews(response.views);
    } catch (error) {}
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
        />

        <Share title={post.title} subTitle={post.subTitle} />

        <main className="mt-6">
          <img
            src={post.imageURL}
            width={700}
            height={500}
            className="mx-auto"
            alt={`Banner da postagem ${post.title}`}
          />

          <Editor data={post.content} />

          <Reaction postId={post.id} userReaction={post.userReaction} />
        </main>
      </div>
    </div>
  );
}
