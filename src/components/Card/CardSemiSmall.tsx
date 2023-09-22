import Image from "next/image";import Link from "next/link";
import { PostWithDetails } from "@domain";
import { FaPlay } from "react-icons/fa";
import { linkUtils, textUtils } from "@utils";

interface Props {
  post: PostWithDetails;
}

export function CardSemiSmall({ post }: Props) {
  var title = textUtils.textLength(post.title, 69);
  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);

  return (
    <div className="md:my-3 w-11/12 sm:w-[49%] lg:w-full">
      <div className="post-media">
        <Link href={linkPost} className="relative w-full">
          <div className="h-48 w-full mx-auto">
            <img
              src={post.imageURL}
              alt=""
              className="w-full"
              width={400}
              height={400}
            />
          </div>
          <div className="hoverEffect absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="videoHover text-4xl text-gray-300">
              <FaPlay />
            </div>
          </div>
        </Link>
      </div>
      <div className="text-base font-semibold mt-2">
        <Link href={linkPost} className="mb-1 hover:underline">
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
