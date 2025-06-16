"use client";
import { useStore } from "@/app/_store";
import { Button } from "@/shared/ui/elements/button/button";
import { Progress } from "@/shared/ui/elements/progress/progress";
import GlobalHeader from "@/shared/ui/layouts/global-header";

import OptionButton from "../option-button";

interface QuizPageProps {
  id: string;
}
const QuizPage = ({ id }: QuizPageProps) => {
  const { quizzes, currentQuestionNumber } = useStore();
  const quiz = quizzes.find((q) => q.id.toString() === id);
  const questions = quiz?.questions;
  console.log(questions);

  if (!quiz || !questions) return <div>データなし</div>; //TODO:データなしってのを表示する。

  // 状態を変えていく。
  // stateを変更して、それを残すかな。ローカルステートで良いかも。
  // 最後の問題になったら、Submit Answerにボタン名を切り替える。
  // 最後の問題の解答が終わったらscoreを表示する。
  // play againで、scoreは破棄するので、ローカルステートで問題ない気がする。
  // この画面は、基本的に切り替えるためのロジックを書きたい。
  // 切り替えたら、どうする？
  const currentQuestion = questions[currentQuestionNumber - 1];
  const currentQuestionOptions = currentQuestion.options;
  return (
    <div>
      {/* header */}
      <GlobalHeader
        title={quiz.title}
        icon={quiz.icon}
        bgIconColor={quiz.bgIconColor}
      />
      {/* content */}
      <div className="desktop:flex desktop:space-x-1600 mx-auto pt-400">
        <div>
          {/* title */}
          <div className="space-y-200">
            <p className="typo-5-italic text-grey-500 dark:text-blue-300">
              Question {currentQuestionNumber} of {questions["length"]}
            </p>
            <h1 className="typo-3">{currentQuestion.question}</h1>
          </div>
          <Progress
            className="desktop:mt-2300 mt-400 mb-500 w-full"
            value={10}
          />
        </div>
        {/* answer */}
        <div className="space-y-sm-200-to-md-300">
          {currentQuestionOptions.map((option, num) => (
            // TODO:buttonの状態管理を行う。
            <OptionButton
              key={num}
              option={option}
              no={(num + 1).toString()}
              onClick={() => {}}
              className="w-full"
            >
              {num + 1}
              {option}
            </OptionButton>
          ))}
          <Button className="mb-400 w-full">Next Question</Button>
        </div>
      </div>
    </div>
  );
};

export { QuizPage };
