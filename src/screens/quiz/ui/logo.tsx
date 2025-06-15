import { VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";

import IconContainer, {
  iconContainerVariants,
} from "../../../shared/ui/elements/container/icon-container";

type LogoProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGElement>> | string;
  className?: string;
};
const Logo = ({
  title,
  icon: Icon,
  iconBgColor,
  className,
}: LogoProps & VariantProps<typeof iconContainerVariants>) => {
  return (
    <div className={cn("typo-4 flex items-center space-x-100", className)}>
      <IconContainer iconBgColor={iconBgColor}>
        {typeof Icon === "string" ? (
          <Image alt={title} src={Icon} width={20} height={20} />
        ) : (
          <Icon className="w-[80%]" />
        )}
      </IconContainer>
      <p className="block">{title}</p>
    </div>
  );
};

export default Logo;
