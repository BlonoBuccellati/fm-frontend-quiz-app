import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

import IconContainer, {
  iconContainerVariants,
} from "@/shared/ui/elements/container/icon-container";

type LogoProps = {
  title: string;
  icon: string;
  className?: string;
};
const Logo = ({
  title,
  icon: Icon,
  iconBgColor,
  className,
}: LogoProps & VariantProps<typeof iconContainerVariants>) => {
  return (
    <div
      className={cn(
        "typo-4 space-x-sm-200-to-md-300 flex items-center",
        className,
      )}
    >
      <IconContainer
        imageAlt="answer option"
        iconBgColor={iconBgColor}
        iconSrc={Icon}
      />

      <p className="block">{title}</p>
    </div>
  );
};

export default Logo;
