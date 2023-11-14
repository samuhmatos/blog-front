import Image from "next/image";
interface Props {
  widthHeight?: number;
  className?: string;
}
export function BrandIcon({ widthHeight = 45, className }: Props) {
  return (
    <Image
      src="/assets/logo.png"
      alt="FlowBite Logo"
      width={widthHeight}
      height={widthHeight}
      className={className}
    />
  );
}
