"use client";

import { cn } from "@/shared/lib/utils";
import { IconBox, IconImage } from "@/shared/ui/icon/icon-box";

import { Button } from "../../../shared/ui/button/button";

type OptionButtonProps = {
  isSelected: boolean;
  option: string;
  no: string;
  onClick: () => void;
  className?: string;
  iconClassName?: string;
  icon?: React.FC<React.SVGProps<SVGElement>>;
};
const OptionButton = ({
  option,
  no,
  isSelected = false,
  onClick,
  className,
  iconClassName,
  icon: IconAnswer,
  ...props
}: React.ComponentProps<"button"> & OptionButtonProps) => {
  return (
    <Button
      variant="withIcon"
      className={cn(
        "flex items-center justify-between hover:ring-3 hover:ring-purple-600 hover:ring-inset",
        isSelected && "ring-3 ring-purple-600 ring-inset",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      {/* imageAlt="answer option" */}
      <div className="flex items-center space-x-200">
        <IconBox
          className={cn(
            "bg-grey-50 dark:text-grey-500 hover:dark:bg-purple-600",
            isSelected && "bg-purple-600",
            iconClassName,
          )}
        >
          <IconImage
            imageAlt="answer option"
            text={no}
            className={cn(
              "typo-4 text-grey-500 block",
              isSelected && "text-white",
            )}
          />
        </IconBox>
        <div className="typo-4 text-left">{option}</div>
      </div>
      {IconAnswer && <IconAnswer className="min-w-500" />}
    </Button>
  );
};

export default OptionButton;
