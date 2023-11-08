import Link from "next/link";
import { PostWithDetails } from "@domain";
import { CategoryBox } from "@components";
import { linkUtils, textUtils } from "@utils";

interface BoxProps {
  post: PostWithDetails;
  first?: boolean;
}

export function BannerBox({ post, first = false }: BoxProps) {
  var title = textUtils.textLength(post.title, 69);
  var linkPost = linkUtils.linkPost(post.slug, post.category.slug);

  return (
    <div
      className={`${
        first ? "w-full lg:w-1/2" : "w-full md:w-[49%] lg:w-1/4"
      } h-96 overflow-hidden rounded`}
    >
      <div className="post-media w-full h-full relative">
        <img
          src={post.imageURL}
          alt={`Banner da postagem ${title}`}
          width={400}
          height={500}
        />
        <div className="absolute bottom-0 px-3 py-2 w-full bg-gradient-to-b from-transparent to-black">
          <div className="text-white font-semibold">
            <div className="blog-meta">
              <CategoryBox url={linkPost} categoryName={post.category.name} />
              <h4 className="text-2xl hover:underline">
                <Link href={linkPost} title={post.title}>
                  {title}
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
