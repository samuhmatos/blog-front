import { BannerBoxSkeleton } from "@components/Skeleton";export function BannerSkeleton() {
  var arr = [1, 2, 3];
  return (
    <section className="py-3 mt-4">
      <div className="flex justify-center w-full gap-2 flex-wrap  lg:flex-nowrap bg-red">
        {arr.map((_, index) => (
          <BannerBoxSkeleton first={index === 0} key={index} />
        ))}
      </div>
    </section>
  );
}
