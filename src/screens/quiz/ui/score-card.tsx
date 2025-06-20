import { cn } from "@/shared/lib/utils";

type ScoreProps = {
  score: number;
  total: number;
  renderLogo: () => React.ReactElement;
  className?: string;
};
const ScoreCard = ({ score, total, renderLogo, className }: ScoreProps) => {
  return (
    <div
      className={cn(
        "dark:bg-blue-850 w-fit space-y-200 rounded-[0.75rem] bg-white p-400",
        className,
      )}
    >
      <div className="mx-auto w-fit">{renderLogo()}</div>
      <p className="space-y-400 text-center">
        <span className="typo-1 block text-blue-900 dark:text-white">
          {score}
        </span>
        <span className="typo-5 text-grey-500 block dark:text-blue-300">
          out of {total}
        </span>
      </p>
    </div>
  );
};

export default ScoreCard;
