"use client";
import Link from "next/link";
import { useRouter } from "nextjs-progressloader";
import { Category } from "@domain";
import { linkUtils } from "@utils";
import { Button, Icon } from "@components";

interface Props {
  category: Category;
}
export function CategoryCard({ category }: Props) {
  const router = useRouter();

  return (
    <div
      key={category.id}
      className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={linkUtils.linkCategory(category.slug)}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {category.name}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {category.description}
      </p>

      <Button
        placeholder="Ver as postagens"
        endIcon={<Icon name="ArrowRight" />}
        onClick={() => {
          router.push(linkUtils.linkCategory(category.slug));
        }}
      />
    </div>
  );
}
