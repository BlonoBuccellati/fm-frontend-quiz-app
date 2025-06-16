import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/elements/button/button";
import {
  IconContainer,
  iconContainerVariants,
  IconImage,
} from "@/shared/ui/elements/icon/icon-container";

type ButtonWithIconProps = {
  title: string;
  iconSrc: string;
  className?: string;
};
const ButtonWithIcon = ({
  className,
  title,
  iconSrc,
  iconBgColor,
}: ButtonWithIconProps & VariantProps<typeof iconContainerVariants>) => {
  return (
    <Button variant="withIcon" className={cn("flex items-center", className)}>
      <IconContainer iconBgColor={iconBgColor}>
        <IconImage iconSrc={iconSrc} imageAlt={`${title} image`} />
      </IconContainer>
      {/* button title */}
      <p>{title}</p>
    </Button>
  );
};

export default ButtonWithIcon;
