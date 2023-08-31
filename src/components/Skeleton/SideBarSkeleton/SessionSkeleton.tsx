import { CardSemiSmallSkeleton } from "../Card/CardSemiSmallSkeleton";import { CardSmallSkeleton } from "../Card/CardSmallSkeleton";

interface Props {
  title: string;
  semiSmall?: boolean;
}

export function SessionSkeleton({ title, semiSmall }: Props) {
  var arr = [1, 2, 3];
  return (
    <div className="mb-3">
      <h3 className="text-xl mb-2 font-bold text-center lg:text-start">
        {title}
      </h3>
      <div className="flex flex-row justify-center gap-2 flex-wrap md:flex-nowrap lg:flex-col">
        {arr.map((_, index) =>
          semiSmall ? (
            <CardSemiSmallSkeleton key={index} />
          ) : (
            <CardSmallSkeleton key={index} />
          )
        )}
      </div>
    </div>
  );
}
