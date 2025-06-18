import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/button";
import { IconBox, iconBoxVariants, IconImage } from "@/shared/ui/icon/icon-box";

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
}: ButtonWithIconProps & VariantProps<typeof iconBoxVariants>) => {
  return (
    <Button variant="withIcon" className={cn("flex items-center", className)}>
      <IconBox iconBgColor={iconBgColor}>
        <IconImage iconSrc={iconSrc} imageAlt={`${title} image`} />
      </IconBox>
      {/* button title */}
      <p>{title}</p>
    </Button>
  );
};

export default ButtonWithIcon;
