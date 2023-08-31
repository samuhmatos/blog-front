export function CardMediumSkeleton() {
  return (
    <div className="flex flex-wrap mb-6  md:h-52 md:flex-nowrap">
      <div className="post-media w-full h-72 bg-gray-400 animate-pulse rounded md:h-auto md:w-64"></div>

      <div className="flex-1 mt-1 md:mt-0 md:px-4">
        <div className="bg-gray-400 animate-pulse h-14 rounded"></div>
        <div className="mt-2 bg-gray-400 animate-pulse h-28 rounded"></div>

        <div className="flex items-center gap-2 mt-3 flex-wrap sm:justify-normal 2sm:justify-between">
          <div className="w-36 h-5 bg-gray-400 animate-pulse rounded"></div>
          <div className="flex-1 h-5 bg-gray-400 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
}
