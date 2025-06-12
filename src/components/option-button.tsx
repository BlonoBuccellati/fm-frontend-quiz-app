"use client";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type OptionButtonProps = {
  isSelected: boolean;
  option: string;
  no: string;
  onClick: () => void;
};
const OptionButton = ({
  option,
  no,
  isSelected,
  onClick,
}: OptionButtonProps) => {
  return (
    <Button
      variant="withIcon"
      className={cn(
        "flex w-full items-center space-x-200",
        isSelected && "ring-3 ring-purple-600 ring-inset",
      )}
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onClick}
    >
      <span
        className={cn(
          "bg-grey-50 dark:text-grey-500 flex size-[40px] items-center justify-center rounded-[6px]",
          isSelected && "dark:text-whites bg-purple-600 text-white",
        )}
      >
        {no}
      </span>
      <option className="typo-4">{option}</option>
    </Button>
  );
};

export default OptionButton;
