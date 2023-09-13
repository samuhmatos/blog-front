import { BsWifi } from "react-icons/bs";
import { CardMediumSkeleton } from "@components/Skeleton";

interface Props {
  top?: boolean;
}

export function FeedSkeleton({ top = true }: Props) {
  var arr = [1, 2, 3, 4, 5];

  return (
    <div className="w-full lg:w-3/4">
      {!top === false && (
        <div className="mb-4">
          <h4 className="flex items-center justify-center font-semibold text-xl lg:justify-normal">
            Notícias recentes
            <span className="text-red-600 ml-2 text-xl">
              <BsWifi />
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
