import Link from "next/link";interface CategoryBoxProps {
  url: string;
  categoryName: string;
  large?: boolean;
}
export function CategoryBox({
  categoryName,
  url,
  large = false,
}: CategoryBoxProps) {
  return (
    <span
      className={`${
        large ? "text-base font-medium" : "text-sm font-medium"
      } bg-orange-500 rounded  text-gray-100 px-4`}
    >
      <Link href={url}>{categoryName}</Link>
    </span>
  );
}
