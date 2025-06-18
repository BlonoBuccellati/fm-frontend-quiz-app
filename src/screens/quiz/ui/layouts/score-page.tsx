"use client";
import { useRouter } from "next/navigation";

import { Button } from "@/shared/ui/button/button";
import Main from "@/shared/ui/main";

import ScoreCard from "../score-card";

import QuizHeader from "./quiz-header";

const Title = () => {
  return (
    <h1 className="space-y-100">
      <span className="typo-2-light block">Quiz completed</span>
      <span className="typo-2">You scored...</span>
    </h1>
  );
};

type ScorePageProps = {
  score: number;
  total: number;
  renderLogo: () => React.ReactElement;
};

const ScorePage = ({ renderLogo, score, total }: ScorePageProps) => {
  const router = useRouter();
  const handlerClick = () => router.back();
  return (
    <div>
      {/* header */}
      <QuizHeader renderLogo={renderLogo} />

      <Main className="desktop:pt-0 pt-400">
        <Title />
        <div className="desktop:mt-0 mt-sm-500-to-md-800 space-y-sm-200-to-md-400">
          <ScoreCard
            score={score}
            total={total}
            renderLogo={renderLogo}
            className="mx-auto w-full"
          />
          <Button className="w-full" onClick={handlerClick}>
            Play Again
          </Button>
        </div>
      </Main>
    </div>
  );
};

export default ScorePage;
