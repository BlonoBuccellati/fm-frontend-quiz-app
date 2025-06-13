import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const iconContainerVariants = cva("", {
  variants: {
    iconBgColor: {
      html: "bg-orange-50",
      css: "bg-green-100",
      javaScript: "bg-blue-50",
      accessibility: "bg-purple-100",
    },
  },
  defaultVariants: {
    iconBgColor: "html",
  },
});
const IconContainer = ({
  className,
  asChild = false,
  iconBgColor,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof iconContainerVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      {...props}
      className={cn(
        "flex size-[40px] items-center justify-center rounded-[8px]",
        iconContainerVariants({ iconBgColor }),
        className,
      )}
    />
  );
};

export default IconContainer;
