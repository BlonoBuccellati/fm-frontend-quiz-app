import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "p-200 rounded-[clamp(0.75rem,0.034rem+3.05vw,1.5rem)] typo-4 hover:cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-purple-600 hover:bg-[color-mix(in_srgb,white_50%,theme(colors.purple.600))] text-white p-sm-200-to-md-400",
        withIcon:
          "bg-white dark:bg-blue-850 text-blue-900 dark:text-white p-md-200-to-lg-300 space-x-sm-200-to-md-400",
      },
      notAllowedVariant: {
        default:
          "disabled:cursor-not-allowed disabled:hover:opacity-100 disabled:hover:ring-0",
      },
    },
    defaultVariants: {
      variant: "default",
      notAllowedVariant: "default",
    },
  },
);

function Button({
  className,
  variant,
  notAllowedVariant,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, notAllowedVariant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
