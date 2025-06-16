"use client";
import { useState } from "react";

import { useStore } from "@/app/_store";
import { IconCorrect, IconError } from "@/shared/assets";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/elements/button/button";
import { Progress } from "@/shared/ui/elements/progress/progress";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";
import { HeaderContainer } from "@/shared/ui/layouts/header-container";

import ErrorMessage from "../error-messege";
import Logo from "../logo";
import OptionButton from "../option-button";

import ScorePage from "./score-page";

interface QuizPageProps {
  title: string;
}
const QuizPage = ({ title }: QuizPageProps) => {
  const { quizzes } = useStore();
  const quiz = quizzes.find((q) => q.title === title);
  const questions = quiz?.questions;
  console.log(questions);
  const [selectedOption, setSelectedOption] = useState<undefined | string>();
  const [hasError, setHasError] = useState(false);
  const [finish, setFinish] = useState(false);
  const [progress, setProgress] = useState(0);

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>();
  const [buttonTitle, setButtonTitle] = useState<
    "Submit Answer" | "Next Question"
  >("Submit Answer");

  const getIcon = () => {
    if (isCorrect === undefined) {
      return undefined;
    }
    if (isCorrect) {
      return IconCorrect;
    }
    return IconError;
  };
  if (!quiz || !questions) return <div>データなし</div>; //TODO:データなしってのを表示する。

  const total = questions["length"];
  const currentNum = currentQuestionId + 1;
  const progressCurrent = (currentNum / total) * 100;
  // State管理
  // プログレスバー：n/questionで計算（状態管理） progress/setProgress
  // Answerしたら、正解のボタンにcorrectIconがつく。
  // Answerしたら、ボタンが押せなくなる。
  // Answerしたら、おしたボタンが正解か間違っているかを切り替える。
  // Answerしたら、isCorrectの数だけ状態を管理する（totalCorrect）
  const currentQuestion = questions[currentQuestionId];
  const currentQuestionOptions = currentQuestion.options;
  const isLastQuiz = questions["length"] === currentQuestionId + 1;

  const renderLogo = () => {
    return (
      <Logo
        title={quiz.title}
        icon={quiz.icon}
        iconBgColor={
          quiz.bgIconColor as
            | "default"
            | "html"
            | "javaScript"
            | "accessibility"
        }
      />
    );
  };
  if (!finish) {
    return <ScorePage score={3} total={10} renderLogo={renderLogo} />;
  }
  return (
    <div>
      {/* header */}
      <HeaderContainer>
        {renderLogo()}
        <ThemeSwitch />
      </HeaderContainer>
      {/* content */}
      <main className="desktop:flex desktop:space-x-1600 mx-auto pt-400">
        <div>
          {/* title */}
          <div className="space-y-200">
            <p className="typo-5-italic text-grey-500 dark:text-blue-300">
              Question {currentQuestionId + 1} of {questions["length"]}
            </p>
            <h1 className="typo-3">{currentQuestion.question}</h1>
          </div>
          <Progress
            className="desktop:mt-2300 mt-400 mb-500 w-full"
            value={progress}
          />
        </div>
        {/* answer */}
        <div className="space-y-sm-200-to-md-300">
          {currentQuestionOptions.map((option, num) => (
            // TODO:buttonの状態管理を行う。
            <OptionButton
              isSelected={selectedOption === option}
              key={num}
              icon={selectedOption === option ? getIcon() : undefined}
              option={option}
              no={(num + 1).toString()}
              onClick={() => {
                setSelectedOption(option);
                setIsCorrect(undefined);
              }}
              className={cn(
                "w-full",
                selectedOption === option &&
                  isCorrect &&
                  "ring-green-500 hover:ring-green-500",
                selectedOption === option &&
                  isCorrect === false &&
                  "ring-red-500 hover:ring-red-500",
              )}
              iconClassName={cn(
                selectedOption === option && isCorrect && "bg-green-500",
                selectedOption === option &&
                  isCorrect === false &&
                  "bg-red-500",
              )}
            />
          ))}
          <Button
            className="mb-400 w-full"
            role="button"
            onClick={() => {
              setProgress(progressCurrent);
              if (selectedOption === undefined) {
                setHasError(true);
                return;
              }
              if (selectedOption === currentQuestion.answer) {
                setIsCorrect(true);
              } else {
                setIsCorrect(false);
              }
              if (isLastQuiz) {
                setFinish(true);
                return;
              }
              if (buttonTitle === "Submit Answer") {
                setButtonTitle("Next Question");
              }
              if (buttonTitle === "Next Question") {
                setCurrentQuestionId((prev) => 1 + prev);
                setButtonTitle("Submit Answer");
              }
            }}
          >
            {buttonTitle}
          </Button>
          {hasError && <ErrorMessage className="mx-auto" />}
        </div>
      </main>
    </div>
  );
};

export { QuizPage };
