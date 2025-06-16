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

const IconContainer = ({
  className,
  iconBgColor,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof iconContainerVariants>) => {
  return (
    <div
      className={cn(
        "size-sm-500-to-md-700 flex min-w-500 items-center justify-center rounded-[8px]",
        iconContainerVariants({ iconBgColor }),
        className,
      )}
      {...props}
    />
  );
};

type IconImageProps = {
  imageAlt: string;
  className?: string;
} & ({ iconSrc: string; text?: never } | { text: string; iconSrc?: never });

const IconImage = ({ imageAlt, iconSrc, text, className }: IconImageProps) => {
  const renderImage = (iconSrc: string) => {
    return (
      <Image
        alt={imageAlt}
        src={iconSrc}
        width={40}
        height={40}
        className={cn("w-[80%]", className)}
      />
    );
  };
  const renderWithText = (text: string) => {
    return (
      <div
        className={cn("typo-4 text-grey-500 w-[80%] text-center", className)}
        role="img"
        aria-label={imageAlt}
      >
        {text}
      </div>
    );
  };
  if (iconSrc) {
    return renderImage(iconSrc);
  }
  if (text) {
    return renderWithText(text);
  }
};

export { IconContainer, IconImage };
