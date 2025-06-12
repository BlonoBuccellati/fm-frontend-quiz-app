import { cva, VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

import { Button } from "./ui/button";

const iconVariants = cva("", {
  variants: {
    iconColor: {
      html: "bg-orange-50",
      css: "bg-green-100",
      javaScript: "bg-blue-50",
      accessibility: "bg-purple-100",
    },
  },
  defaultVariants: {
    iconColor: "html",
  },
});
type ButtonWithIconProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
};
const ButtonWithIcon = ({
  title,
  icon: Icon,
  iconColor,
}: ButtonWithIconProps & VariantProps<typeof iconVariants>) => {
  return (
    <div className="relative w-full">
      <div className="flex space-x-200">
        <Button variant="withIcon" className="w-full">
          <span>{title}</span>
          <Icon
            className={cn(
              "absolute top-1/2 size-[40px] -translate-y-1/2 rounded-[6px]",
              iconVariants({ iconColor }),
            )}
          />
        </Button>
      </div>
    </div>
  );
};

export default ButtonWithIcon;
