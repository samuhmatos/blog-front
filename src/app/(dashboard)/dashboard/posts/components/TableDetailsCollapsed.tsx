import { Post } from "@domain";type TableDetailsType = Pick<Post, "subTitle" | "content" | "category">;

export function TableDetailsCollapsed({
  category,
  content,
  subTitle,
}: TableDetailsType) {
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
          <div>{content}</div>
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
