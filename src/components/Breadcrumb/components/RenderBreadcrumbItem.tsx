import Link from "next/link";import { Icon } from "@components";

interface Props {
  url: string;
  slug: string;
  index: number;
  pathsLength: number;
}

export function RenderHome({ slug, url }: Props) {
  return (
    <RenderLink url={url}>
      <Icon name="Home" className="mr-2" />
      <span>{slug}</span>
    </RenderLink>
  );
}

export function RenderRest({ slug, url, index, pathsLength }: Props) {
  return (
    <>
      <Icon name="ArrowRightHalf" className="mx-1 text-gray-400" />
      <RenderLink url={url}>
        {index === pathsLength ? (
          <span className="text-gray-500 md:ml-2 dark:text-gray-400">
            {slug}
          </span>
        ) : (
          <span>{slug}</span>
        )}
      </RenderLink>
    </>
  );
}

function RenderLink({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <Link
      href={url}
      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white capitalize"
    >
      {children}
    </Link>
  );
}
