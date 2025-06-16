import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@/shared/lib/utils";

export const iconContainerVariants = cva("", {
  variants: {
    iconBgColor: {
      default: "bg-grey-50",
      html: "bg-orange-50",
      css: "bg-green-100",
      javaScript: "bg-blue-50",
      accessibility: "bg-purple-100",
    },
  },
  defaultVariants: {
    iconBgColor: "default",
  },
});

type IconContainerProps = {
  imageAlt: string;
  iconSrc?: string;
  optionNo?: string;
};
const IconContainer = ({
  className,
  imageAlt,
  iconSrc,
  optionNo = "",
  iconBgColor,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof iconContainerVariants> &
  IconContainerProps) => {
  return (
    <div
      {...props}
      className={cn(
        "size-sm-500-to-md-700 flex min-w-500 items-center justify-center rounded-[8px]",
        iconContainerVariants({ iconBgColor }),
        className,
      )}
    >
      {iconSrc ? (
        <Image
          alt={imageAlt}
          src={iconSrc}
          width={40}
          height={40}
          className="w-[80%]"
        />
      ) : (
        <div
          className="typo-4 text-grey-500 w-[80%] text-center"
          role="img"
          aria-label={imageAlt}
        >
          {optionNo}
        </div>
      )}
    </div>
  );
};

export default IconContainer;
