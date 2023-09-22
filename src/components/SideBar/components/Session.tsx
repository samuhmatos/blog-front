import { CardSemiSmall, CardSmall } from "@components";
import { PostWithDetails } from "@domain";

interface Props {
  title: string;
  data: PostWithDetails[];
  semiSmall?: boolean;
}

export function Session({ title, data, semiSmall = false }: Props) {
  return (
    <div className="mb-5">
      <h3 className="text-xl mb-4 font-bold text-center lg:text-start">
        {title}
      </h3>
      <div className="flex flex-row justify-center gap-2 flex-wrap md:flex-nowrap lg:flex-col">
        {data.map((post) =>
          semiSmall ? (
            <CardSemiSmall key={post.id} post={post} />
          ) : (
            <CardSmall key={post.id} post={post} />
          )
        )}
      </div>
    </div>
  );
}
