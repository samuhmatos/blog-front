export function CardSmallSkeleton() {
  return (
    <div className="py-1 mb-3 h-20">
      <div className="flex gap-2 h-full">
        <div className="w-24 bg-gray-400 animate-pulse"></div>
        <div className="flex-1 bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  );
}
