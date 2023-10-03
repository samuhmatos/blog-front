import Link from "next/link";import { Icon } from "../Icon/Icon";

interface Props {
  linkPost: string;
  linkCategory: string;
  date: string;
  author: string;
  views: number;
  justify?: "center" | "normal";
}

export function PostDetails({
  author,
  linkCategory,
  date,
  linkPost,
  views,
  justify = "normal",
}: Props) {
  return (
    <div
      className={`flex flex-1 justify-around items-center gap-4 text-gray-500 flex-wrap sm:flex-nowrap sm:justify-center`}
    >
      <small>
        <Link href={linkPost} className="hover:underline">
          {date}
        </Link>
      </small>
      <small>
        <Link href={linkCategory} className="hover:underline">
          por {author}
        </Link>
      </small>
      <small>
        <Link
          href={linkPost}
          className="flex items-center gap-1 hover:underline text-gray-500"
        >
          <Icon name="Eyes" /> {views}
        </Link>
      </small>
    </div>
  );
}
