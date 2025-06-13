"use client";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import IconContainer from "./ui/icon-container";

type OptionButtonProps = {
  isSelected: boolean;
  option: string;
  no: string;
  onClick: () => void;
  className?: string;
  icon?: React.FC<React.SVGProps<SVGElement>>;
};
const OptionButton = ({
  option,
  no,
  isSelected,
  onClick,
  className,
  icon: IconAnswer,
}: OptionButtonProps) => {
  return (
    <Button
      variant="withIcon"
      className={cn(
        "flex items-center justify-between",
        className,
        isSelected && "ring-3 ring-purple-600 ring-inset",
      )}
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
    >
      <div className="flex items-center space-x-200">
        <IconContainer
          className={cn(
            "bg-grey-50 dark:text-grey-500",
            isSelected && "bg-purple-600 text-white dark:text-white",
          )}
        >
          {no}
        </IconContainer>
        <div className="typo-4">{option}</div>
      </div>
      {IconAnswer && <IconAnswer />}
    </Button>
  );
};

export default OptionButton;
