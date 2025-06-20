import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";

import { IconBgColor } from "@/shared/color/types";
import { cn } from "@/shared/lib/utils";

export const iconBoxVariants = cva("", {
  variants: {
    iconBgColor: {
      default: "bg-grey-50",
      html: "bg-orange-50",
      css: "bg-green-100",
      javaScript: "bg-blue-50",
      accessibility: "bg-purple-100",
    } satisfies Record<IconBgColor, string>,
  },
  defaultVariants: {
    iconBgColor: "default",
  },
});

const IconBox = ({
  className,
  iconBgColor,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof iconBoxVariants>) => {
  return (
    <div
      className={cn(
        "size-sm-500-to-md-700 pointer-events-none flex min-w-[var(--spacing-sm-500-to-md-700)] items-center justify-center rounded-[0.5rem]",
        iconBoxVariants({ iconBgColor }),
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
  if (iconSrc) {
    return (
      <Image
        alt={imageAlt}
        src={iconSrc}
        width={40}
        height={40}
        className={cn("w-[60%]", className)}
      />
    );
  }
  if (text) {
    return (
      <div
        className={cn("typo-4 text-grey-500 text-center", className)}
        role="img"
        aria-label={imageAlt}
      >
        {text}
      </div>
    );
  }
};

export { IconBox, IconImage };
