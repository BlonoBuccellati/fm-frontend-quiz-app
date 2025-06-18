"use client";

import { IconCorrect, IconError } from "@/shared/assets";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/button";
import Main from "@/shared/ui/main";
import { Progress } from "@/shared/ui/progress/progress";

import { QuestionProps, useQuestion } from "../../model/useQuesiton";
import ErrorMessage from "../error-messege";
import Logo from "../logo";
import OptionButton from "../option-button";

import QuizHeader from "./quiz-header";
import ScorePage from "./score-page";

type QuestionTitleProps = {
  currentQuestionNum: number;
  totalQuestionNum: number;
  currentQuestion: string;
};

const QuestionTitle = ({
  currentQuestionNum,
  totalQuestionNum,
  currentQuestion,
}: QuestionTitleProps) => {
  return (
    <div className="space-y-200">
      <p className="typo-5-italic text-grey-500 dark:text-blue-300">
        Question {currentQuestionNum} of {totalQuestionNum}
      </p>
      <h1 className="typo-3">{currentQuestion}</h1>
    </div>
  );
};

const OptionButtonList = ({
  currentQuestion,
  submitted,
  selectedOption,
  events,
  isCorrect,
}: QuestionProps) => {
  const getIcon = (option: string) => {
    const isCorrect = currentQuestion.answer === option;
    // 押したもの
    return isCorrect ? IconCorrect : IconError;
  };
  return (
    <>
      {currentQuestion.options.map((option, num) => {
        const shouldChangeColor = submitted && selectedOption === option;
        const icon = () => {
          if (submitted) {
            return selectedOption === option || isCorrect
              ? getIcon(option)
              : undefined;
          }
          return undefined;
        };
        return (
          // TODO:buttonの状態管理を行う。
          <OptionButton
            isSelected={selectedOption === option}
            disabled={submitted}
            key={num}
            option={option}
            no={(num + 1).toString()}
            onClick={() => events.handleOptionSelect(option)}
            // 対象のボタンのみ：正解のボタン +
            icon={icon()}
            className={cn(
              "w-full",
              shouldChangeColor &&
                isCorrect &&
                "ring-green-500 hover:ring-green-500 disabled:hover:ring-3",
              shouldChangeColor &&
                !isCorrect &&
                "ring-3 ring-red-500 hover:ring-red-500 disabled:hover:ring-3",
              // submitted && "hover:cursor-not-allowed hover:bg-none",
            )}
            iconClassName={cn(
              shouldChangeColor && isCorrect && "bg-green-500",
              shouldChangeColor && !isCorrect && "bg-red-500",
            )}
          />
        );
      })}
    </>
  );
};

interface QuizPageContainerProps {
  title: string;
}
const QuizPageContainer = ({ title }: QuizPageContainerProps) => {
  const { selectedQuiz, events, quizResult, currentQuestion, ...question } =
    useQuestion(title);
  if (!currentQuestion) return <div>データなし。</div>;

  const renderLogo = () => {
    return (
      <Logo
        title={selectedQuiz.title}
        icon={selectedQuiz.icon}
        iconBgColor={selectedQuiz.bgIconColor}
      />
    );
  };
  if (question.finish) {
    return (
      <ScorePage
        score={quizResult.score}
        total={quizResult.totalQuestions}
        renderLogo={renderLogo}
      />
    );
  }
  return (
    <div>
      <QuizHeader renderLogo={renderLogo} />
      <Main className="desktop:pt-0 pt-400">
        {/* left contents */}
        <div>
          <QuestionTitle
            currentQuestion={currentQuestion.question}
            currentQuestionNum={currentQuestion.questionNum}
            totalQuestionNum={quizResult.totalQuestions}
          />
          <Progress
            className="desktop:mt-2300 mt-400 mb-500 w-full"
            value={question.progress}
          />
        </div>
        {/* answer */}
        <div className="space-y-sm-200-to-md-300">
          <OptionButtonList
            currentQuestion={currentQuestion}
            events={events}
            selectedQuiz={selectedQuiz}
            quizResult={quizResult}
            {...question}
          />
          <Button
            className="mb-400 w-full"
            role="button"
            onClick={events.handleSubmit}
          >
            {question.buttonText}
          </Button>
          {question.hasError && <ErrorMessage className="mx-auto" />}
        </div>
      </Main>
    </div>
  );
};

export { QuizPageContainer };
