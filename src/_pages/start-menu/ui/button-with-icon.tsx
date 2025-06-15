import { VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "../../../shared/lib/utils";
import { Button } from "../../../shared/ui/elements/button/button";
import IconContainer, {
  iconContainerVariants,
} from "../../../shared/ui/elements/container/icon-container";

type ButtonWithIconProps = {
  title: string;
  className?: string;
  icon: React.FC<React.SVGProps<SVGElement>> | string;
};
const ButtonWithIcon = ({
  className,
  title,
  icon: Icon,
  iconBgColor,
}: ButtonWithIconProps & VariantProps<typeof iconContainerVariants>) => {
  return (
    <Button
      variant="withIcon"
      className={cn("flex items-center space-x-200", className)}
    >
      <IconContainer className={cn(iconContainerVariants({ iconBgColor }))}>
        {typeof Icon === "string" ? (
          <Image src={Icon} className="" alt="" width={100} height={100} />
        ) : (
          <Icon className="size-[80%]" />
        )}
      </IconContainer>
      <span className="block">{title}</span>
    </Button>
  );
};

export default ButtonWithIcon;
