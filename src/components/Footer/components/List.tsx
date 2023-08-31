import Link from "next/link";
import { linkUtils } from "../../../utils/linkUtils";

interface Props {
  slug: string;
  name: string;
  postsCount?: number;
}

export function List({ slug, name, postsCount }: Props) {
  const linkCategory = linkUtils.linkCategory(slug);
  return (
    <li className="mb-1 hover:text-sky-500 transition-all">
      <Link href={linkCategory}>
        {name} <small>({postsCount})</small>
      </Link>
    </li>
  );
}
