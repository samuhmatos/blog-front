import Link from "next/link";
import { linkUtils } from "@utils";
import { Icon, IconName } from "@components";

interface Props {
  href: string;
  IconName: IconName;
  label: string;
  RightComponent?: React.ReactNode;
}

export function RenderSideBarItem({
  href,
  IconName,
  RightComponent,
  label,
}: Props) {
  return (
    <li>
      <Link
        href={linkUtils.linkDashboard(href)}
        className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <Icon
          name={IconName}
          className="text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        />
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>

        {RightComponent}
      </Link>
    </li>
  );
}
