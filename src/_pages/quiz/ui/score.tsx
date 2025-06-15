import Logo from "./logo";

type ScoreProps = {
  score: number;
  total: number;
};
const Score = ({ score, total }: ScoreProps) => {
  return (
    <div className="dark:bg-blue-850 w-fit space-y-200 rounded-[12px] bg-white p-400">
      <Logo className="mx-auto w-fit" />
      <p className="space-y-400 text-center">
        <span className="typo-1 block text-blue-900 dark:text-white">
          {score}
        </span>
        <span className="typo-4 text-grey-500 block dark:text-blue-300">
          out of {total}
        </span>
      </p>
    </div>
  );
};

export default Score;
