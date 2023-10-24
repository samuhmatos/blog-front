import { Category } from "@domain";type TableDetailsType = Pick<Category, "description">;

export default function TableDetailsCollapsed({
  description,
}: TableDetailsType) {
  return (
    <div>
      <ul className="flex flex-col gap-2 border-b border-b-gray-200">
        <li>
          <span className="font-semibold">Descrição: </span>
          {description}
        </li>
      </ul>
    </div>
  );
}
