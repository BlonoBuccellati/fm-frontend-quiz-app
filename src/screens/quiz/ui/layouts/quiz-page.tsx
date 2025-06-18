"use client";

import { ReactElement } from "react";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button/button";
import Main from "@/shared/ui/main";
import { Progress } from "@/shared/ui/progress/progress";

import { getOptionButtonState } from "../../model/quiz";
import { QuestionProps } from "../../model/useQuesiton";
import ErrorMessage from "../error-messege";
import OptionButton from "../option-button";

import QuizHeader from "./quiz-header";

type QuestionTitleProps = {
  currentQuestionNum: number;
  totalQuestionNum: number;
  currentQuestionTitle: string;
};

const QuestionTitle = ({
  currentQuestionNum,
  totalQuestionNum,
  currentQuestionTitle,
}: QuestionTitleProps) => {
  return (
    <div className="space-y-200">
      <p className="typo-5-italic text-grey-500 dark:text-blue-300">
        Question {currentQuestionNum} of {totalQuestionNum}
      </p>
      <h1 className="typo-3">{currentQuestionTitle}</h1>
    </div>
  );
};

const OptionButtonList = ({
  currentQuestion,
  events,
  questionState,
}: QuestionProps) => {
  return (
    <>
      {currentQuestion.options.map((option, idx) => {
        // これをコンテナに持っていきたい。どうやって？？
        const optionState = getOptionButtonState(
          questionState,
          option,
          currentQuestion.answer,
          idx,
        );
        return (
          <OptionButton
            isSelected={optionState.isSelected}
            disabled={questionState.submitted}
            key={idx}
            option={option}
            no={optionState.optionText}
            onClick={() => events.handleOptionSelect(option)}
            icon={optionState.icon}
            className={cn(
              "w-full",
              optionState.shouldChangeGreen &&
                "ring-green-500 hover:ring-green-500 disabled:hover:ring-3",
              optionState.shouldChangeRed &&
                "ring-3 ring-red-500 hover:ring-red-500 disabled:hover:ring-3",
            )}
            iconClassName={cn(
              optionState.shouldChangeGreen && "bg-green-500",
              optionState.shouldChangeRed && "bg-red-500",
            )}
          />
        );
      })}
    </>
  );
};

type QuestionSectionProps = {
  totalQuestions: number;
  progress: number;
  currentQuestionTitle: string;
  currentQuestionNum: number;
};
const QuestionSection = ({
  totalQuestions,
  progress,
  currentQuestionTitle,
  currentQuestionNum,
}: QuestionSectionProps) => {
  return (
    <div>
      <QuestionTitle
        currentQuestionTitle={currentQuestionTitle}
        currentQuestionNum={currentQuestionNum}
        totalQuestionNum={totalQuestions}
      />
      <Progress
        className="desktop:mt-2300 mt-400 mb-500 w-full"
        value={progress}
      />
    </div>
  );
};

const AnswerSection = ({
  submitButtonLabel,
  ...props
}: QuestionProps & { submitButtonLabel: string }) => {
  const { questionState, events } = { ...props };
  return (
    <div className="space-y-sm-200-to-md-300">
      <OptionButtonList {...props} />
      <Button
        className="mb-400 w-full"
        role="button"
        onClick={events.handleSubmit}
      >
        {submitButtonLabel}
      </Button>
      {questionState.noSelectedError && <ErrorMessage className="mx-auto" />}
    </div>
  );
};
type QuizPageProps = {
  renderLogo: () => ReactElement;
  submitButtonLabel: string;
  questions: QuestionProps;
};
const QuizPage = ({
  submitButtonLabel,
  renderLogo,
  questions,
}: QuizPageProps) => {
  const {} = questions;
  return (
    <div>
      <QuizHeader renderLogo={renderLogo} />
      <Main className="desktop:pt-0 pt-400">
        <QuestionSection
          totalQuestions={questions.totalQuestions}
          progress={questions.questionState.progress}
          currentQuestionNum={questions.currentQuestion.questionNum}
          currentQuestionTitle={questions.currentQuestion.question}
        />
        <AnswerSection submitButtonLabel={submitButtonLabel} {...questions} />
      </Main>
    </div>
  );
};

export { QuizPage };
