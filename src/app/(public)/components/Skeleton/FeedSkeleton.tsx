import { CardMediumSkeleton } from "@components/Skeleton";
import { Icon } from "@components";

interface Props {
  top?: boolean;
}

export function FeedSkeleton({ top }: Props) {
  var arr = [1, 2, 3, 4, 5];

  return (
    <div className="w-full lg:w-3/4">
      {top && (
        <div className="mb-4">
          <h4 className="flex items-center justify-center font-semibold text-xl lg:justify-normal">
            Notícias recentes
            <span className="ml-2 text-red-600">
              <Icon name="Wifi" size="text-xl" />
            </span>
          </h4>
        </div>
      )}
      <div className="w-full">
        {arr.map((_, index) => (
          <CardMediumSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
