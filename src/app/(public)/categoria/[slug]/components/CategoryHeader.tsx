import { linkUtils } from "@utils";
import { Category } from "@domain";
import Link from "next/link";

interface Props {
  category: Category;
}

export function CategoryHeader({ category }: Props) {
  return (
    <div className="bg-primary-500 min-h-32 -mt-1">
      <div className="px-5 pt-5 pb-2 text-center">
        <Link href={linkUtils.linkCategory(category.slug)}>
          <h2 className="text-white font-bold text-3xl mb-3">
            {category.name}
          </h2>
        </Link>

        <h3 className="text-gray-300">{category.description}</h3>
      </div>
    </div>
  );
}
