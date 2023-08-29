import Link from "next/link";
export interface NavigationPathType {
  slug: string;
  url: string;
}

interface NavigationProps {
  paths: NavigationPathType[];
}

export function Navigation({ paths }: NavigationProps) {
  return (
    <ul className="flex text-gray-500">
      {paths.map((path, index) => (
        <li key={index}>
          <Link href={path.url} className="flex">
            <small className={`${index === 0 ? "mr-3" : "mx-3"} capitalize`}>
              {path.slug}
            </small>
            {paths.length !== index + 1 && <small>/</small>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
