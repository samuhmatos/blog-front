"use client";import { Category } from "@domain";
import { CategoryCard } from "./CategoryCard";
import { ContainerLink, ContainerLinkProps } from "nextjs-progressloader";
import { linkUtils } from "@utils";

interface Props {
  categories: Category[];
}
export function CategoryContainer({ categories }: Props) {
  var links: ContainerLinkProps["links"] = categories.map((category) => {
    return {
      href: linkUtils.linkCategory(category.slug),
      nickname: `category-${category.slug}`,
    };
  });

  return (
    <>
      <ContainerLink links={links} />

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </>
  );
}
