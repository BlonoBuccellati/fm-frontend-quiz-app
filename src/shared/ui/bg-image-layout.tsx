import { BgImageDesktop, BgImageMobile, BgImageTablet } from "../assets";
import { cn } from "../lib/utils";

type BgImageProps = {
  Icon: React.FC<React.SVGProps<SVGElement>>;
  className?: string;
};
const BgImage = ({ Icon, className }: BgImageProps) => {
  return (
    <Icon
      className={cn(
        "h-full w-full object-cover text-blue-100 dark:text-blue-950",
        className,
      )}
      preserveAspectRatio="none"
      width={"100%"}
      height={"100%"}
    />
  );
};
const BgImageLayout = ({ className }: { className?: string }) => {
  return (
    <div className={cn("fixed inset-0 -z-10 h-full w-screen", className)}>
      <BgImage Icon={BgImageDesktop} className="desktop:block hidden" />
      <BgImage
        Icon={BgImageTablet}
        className="tablet:max-desktop:block hidden"
      />
      <BgImage Icon={BgImageMobile} className="tablet:hidden block" />
    </div>
  );
};

export default BgImageLayout;
