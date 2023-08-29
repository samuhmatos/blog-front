import Link from "next/link";import { BsEye } from "react-icons/bs";

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
      className={`flex flex-1 justify-around items-center gap-2 text-gray-500 flex-wrap sm:flex-nowrap sm:justify-${justify}`}
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
          className="flex items-center gap-1 hover:underline"
        >
          <BsEye /> {views}
        </Link>
      </small>
    </div>
  );
}
