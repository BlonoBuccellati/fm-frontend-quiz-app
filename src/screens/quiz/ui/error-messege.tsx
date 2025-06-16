import { IconError } from "@/shared/assets";
import { cn } from "@/shared/lib/utils";

const ErrorMessage = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "typo-4 tablet:typo-5 flex w-fit items-center space-x-100 text-red-500 dark:text-white",
        className,
      )}
    >
      <IconError />
      <p>Please select an answer</p>
    </div>
  );
};

export default ErrorMessage;
