interface Props {  first?: boolean;
}

export function BannerBoxSkeleton({ first }: Props) {
  return (
    <div
      className={`${
        first ? "w-full lg:w-1/2" : "w-full md:w-[49%] lg:w-1/4"
      } h-96 `}
    >
      <div className="w-full h-full relative bg-gray-400 px-3 py-2 animate-pulse"></div>
    </div>
  );
}
