import dynamic from "next/dynamic";
import { PostWithDetails } from "@domain";

type TableDetailsType = Pick<
  PostWithDetails,
  "subTitle" | "content" | "category"
>;

export function TableDetailsCollapsed({
  category,
  content,
  subTitle,
}: TableDetailsType) {
  const Editor = dynamic(() => import("@/components/Editor/ReadOnlyEditor"), {
    ssr: false,
  });

  return (
    <div>
      <ul className="flex flex-col gap-2 border-b border-b-gray-200">
        <li>
          <span className="font-semibold">Categoria: </span>
          {category.name}
        </li>
        <li>
          <span className="font-semibold">subTítulo: </span>
          {subTitle}
        </li>
        <li>
          <p className="text-center font-bold text-lg">Redação</p>
          <div>
            <Editor data={content} />
          </div>
        </li>
      </ul>
    </div>
  );
}

/**
 * @subTitle
 * @content
 * @categoryName
 

* @autorName
 * @commentsCount
 */
