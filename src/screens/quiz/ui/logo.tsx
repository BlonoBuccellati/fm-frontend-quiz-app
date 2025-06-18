import { VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";
import { IconBox, iconBoxVariants, IconImage } from "@/shared/ui/icon/icon-box";

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
}: LogoProps & VariantProps<typeof iconBoxVariants>) => {
  return (
    <div
      className={cn(
        "typo-4 space-x-sm-200-to-md-300 flex items-center",
        className,
      )}
    >
      <IconBox iconBgColor={iconBgColor}>
        <IconImage imageAlt="answer option" iconSrc={icon} />
      </IconBox>

      <h1 className="block">{title}</h1>
    </div>
  );
};

export default Logo;
