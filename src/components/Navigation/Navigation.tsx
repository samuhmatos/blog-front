import Link from "next/link";
export interface NavigationPathType {
  slug: string;
  url: string;
  disabled?: boolean;
}

interface NavigationProps {
  paths: NavigationPathType[];
}

export function Navigation({ paths }: NavigationProps) {
  return (
    <ul className="hidden text-gray-500 lg:flex">
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
