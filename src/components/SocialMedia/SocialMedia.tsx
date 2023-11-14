import { twMerge } from "tailwind-merge";
import { Icon, IconName } from "@components";
import { linkUtils } from "@utils";

interface SocialMediaProps {
  className?: string;
}

interface RenderItemProps {
  name: IconName;
  href: string;
}

export function SocialMedia({ className }: SocialMediaProps) {
  function RenderItem({ href, name }: RenderItemProps) {
    return (
      <li>
        <Icon
          name={name}
          className="hover:text-sky-500"
          link={{
            href,
            target: "_blank",
          }}
        />
      </li>
    );
  }

  return (
    <ul className={twMerge("flex gap-5", className)}>
      <RenderItem name="Instagram" href={linkUtils.socialMedia.instagram} />
      <RenderItem name="LinkedIn" href={linkUtils.socialMedia.linkedIn} />
      <RenderItem name="Envelope" href={linkUtils.socialMedia.email} />
      <RenderItem name="GitHub" href={linkUtils.socialMedia.gitHub} />
    </ul>
  );
}
