import { User } from "@domain";
import Image from "next/image";
type TableDetailsType = Pick<
  User,
  "description" | "imageURL" | "createdAtFormatted"
>;

export function TableUserDetailsCollapsed({
  description,
  imageURL,
  createdAtFormatted,
}: TableDetailsType) {
  return (
    <div>
      <ul className="flex flex-col gap-2 border-b border-b-gray-200">
        <li>
          <Image
            src={imageURL || "/assets/user.png"}
            width={100}
            height={100}
            alt={`Image do usuário`}
          />
        </li>
        <li>
          <span className="font-semibold">Descrição: </span>
          {description}
        </li>

        <li>
          <span className="font-semibold">Descrição: </span>
          {createdAtFormatted}
        </li>
      </ul>
    </div>
  );
}
