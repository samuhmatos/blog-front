import { RenderHome, RenderRest } from "./components/RenderBreadcrumbItem";
export interface BreadcrumbPathType {
  slug: string;
  url: string;
  disabled?: boolean;
}

interface BreadcrumbProps {
  paths: BreadcrumbPathType[];
}

export function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <nav
      className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {paths.map((path, index) => {
          return (
            <li
              key={index}
              className="inline-flex items-center"
              aria-current={index === paths.length - 1 ? "page" : "false"}
            >
              {index === 0 ? (
                <RenderHome
                  index={index}
                  pathsLength={paths.length - 1}
                  slug={path.slug}
                  url={path.url}
                />
              ) : (
                <RenderRest
                  index={index}
                  pathsLength={paths.length - 1}
                  slug={path.slug}
                  url={path.url}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
