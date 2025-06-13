import { VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

import { Button } from "./ui/button";
import IconContainer, { iconContainerVariants } from "./ui/icon-container";

type ButtonWithIconProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
};
const ButtonWithIcon = ({
  title,
  icon: Icon,
  iconBgColor,
}: ButtonWithIconProps & VariantProps<typeof iconContainerVariants>) => {
  return (
    <Button variant="withIcon" className="flex items-center space-x-200">
      <IconContainer className={cn(iconContainerVariants({ iconBgColor }))}>
        <Icon className="size-[80%]" />
      </IconContainer>
      <span className="block">{title}</span>
    </Button>
  );
};

export default ButtonWithIcon;
