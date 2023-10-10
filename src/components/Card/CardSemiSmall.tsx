import Image from "next/image";import Link from "next/link";
import { PostWithDetails } from "@domain";
import { linkUtils, textUtils } from "@utils";
import { Icon } from "../Icon/Icon";

interface Props {
  post: PostWithDetails;
}

export function CardSemiSmall({ post }: Props) {
  var title = textUtils.textLength(post.title, 69);
  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);

  return (
    <div className="md:my-3 w-11/12 sm:w-[49%] lg:w-full">
      <div className="post-media rounded-lg ">
        <Link href={linkPost} className="relative w-full">
          <div className="h-48 w-full mx-auto">
            <Image
              src={post.imageURL}
              alt={`Banner da postagem ${post.title}`}
              className="w-full"
              width={400}
              height={400}
            />
          </div>
          <div className="hoverEffect absolute top-0 left-0 w-full h-full flex justify-center items-center text-gray-300 text-white">
            <div className="videoHover">
              <Icon name="Play" size="text-4xl" />
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
