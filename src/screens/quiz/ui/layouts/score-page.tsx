import { Button } from "@/shared/ui/elements/button/button";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";
import { HeaderContainer } from "@/shared/ui/layouts/header-container";

import ScoreCard from "../score-card";

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
  return (
    <div>
      {/* header */}
      <HeaderContainer>
        {renderLogo()}
        <ThemeSwitch />
      </HeaderContainer>
      <main className="desktop:flex desktop:space-x-1600 mx-auto space-y-30 pt-400">
        <Title />
        <div className="desktop:flex-[1] desktop:mt-0 mt-sm-500-to-md-800 space-y-sm-200-to-md-400">
          <ScoreCard
            score={score}
            total={total}
            renderLogo={renderLogo}
            className="mx-auto w-full"
          />
          <Button className="w-full">Play Again</Button>
        </div>
      </main>
    </div>
  );
};

export default ScorePage;
