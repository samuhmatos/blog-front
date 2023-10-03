import Image from "next/image";import Link from "next/link";
import { BsEye } from "react-icons/bs";

import { Post, PostWithDetails } from "@domain";
import { CategoryBox } from "../CategoryBox/CategoryBox";
import { linkUtils } from "@utils";
import { PostDetails } from "../PostDetails/PostDetails";

interface CardProps {
  post: PostWithDetails;
}

export function CardMedium({ post }: CardProps) {
  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);
  var linkCategory = linkUtils.linkCategory(post.category.slug);

  return (
    <div className="flex flex-wrap mb-6  md:h-52 md:flex-nowrap">
      <div className="post-media w-full h-72 md:h-auto md:w-64">
        <Link href={linkPost}>
          <img
            src={post.imageURL}
            className="rounded"
            width={400}
            height={200}
          />
        </Link>
      </div>

      <div className="flex-1 mt-1 md:mt-0 md:px-4">
        <h4 className="text-sky-500 font-extrabold text-lg hover:underline">
          <Link href={linkPost}>{post.title}</Link>
        </h4>
        <p className="mt-2">{post.subTitle}</p>

        <div className="cardMedium-Bottom flex  items-center gap-2 mt-3 flex-wrap sm:justify-normal 2sm:justify-between">
          <div className="w-full 3sm:w-auto">
            <CategoryBox url={linkPost} categoryName={post.category.name} />
          </div>
          <PostDetails
            author={post.author.name}
            date={post.createdAtFormatted}
            linkCategory={linkCategory}
            linkPost={linkPost}
            views={post.views}
          />
        </div>
      </div>
    </div>
  );
}
