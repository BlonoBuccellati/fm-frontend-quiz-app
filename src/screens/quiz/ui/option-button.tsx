"use client";

import { cn } from "@/shared/lib/utils";

import { Button } from "../../../shared/ui/elements/button/button";
import IconContainer from "../../../shared/ui/elements/container/icon-container";

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
  isSelected = false,
  onClick,
  className,
  icon: IconAnswer,
}: OptionButtonProps) => {
  return (
    <Button
      variant="withIcon"
      className={cn(
        "flex items-center justify-between hover:ring-3 hover:ring-purple-600 hover:ring-inset",
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
