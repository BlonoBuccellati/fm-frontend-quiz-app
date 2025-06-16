import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/elements/button/button";

import IconContainer, {
  iconContainerVariants,
} from "@/shared/ui/elements/container/icon-container";

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
      <IconContainer
        iconSrc={iconSrc}
        iconBgColor={iconBgColor}
        imageAlt="genre of quiz"
      />
      <span className="block">{title}</span>
    </Button>
  );
};

export default ButtonWithIcon;
