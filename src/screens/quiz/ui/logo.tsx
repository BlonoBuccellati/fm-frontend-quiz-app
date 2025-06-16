import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import {
  IconContainer,
  iconContainerVariants,
  IconImage,
} from "@/shared/ui/elements/icon/icon-container";

type LogoProps = {
  title: string;
  icon: string;
  className?: string;
};
const Logo = ({
  title,
  icon,
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
      <IconContainer iconBgColor={iconBgColor}>
        <IconImage imageAlt="answer option" iconSrc={icon} />
      </IconContainer>

      <h1 className="block">{title}</h1>
    </div>
  );
};

export default Logo;
