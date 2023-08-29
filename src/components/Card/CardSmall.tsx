import Image from "next/image";
import Link from "next/link";
import { Post } from "@domain";
import { linkUtils, textUtils } from "@utils";

interface Props {
  post: Post;
}
export function CardSmall({ post }: Props) {
  var title = textUtils.textLength(post.title, 32);

  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);

  return (
    <div className="py-1 mb-3">
      <Link href={linkPost} title="">
        <div className="flex gap-2">
          <div className="w-24">
            <Image src={post.imageURL} alt="" width={400} height={400} />
          </div>
          <div className="text-base font-medium">
            <h5>{title}</h5>
          </div>
        </div>
        <div className="mt-1">
          <small className="text-xs text-gray-400">
            {post.createdAtFormatted}
          </small>
        </div>
      </Link>
    </div>
  );
}
