"use client";

import { useQuestion } from "../../model/useQuesiton";
import Logo from "../logo";

import { QuizPage } from "./quiz-page";
import ScorePage from "./score-page";

interface QuizPageContainerProps {
  title: string;
}
const QuizPageContainer = ({ title }: QuizPageContainerProps) => {
  const questions = useQuestion(title);
  if (!questions?.currentQuestion) return <div>データなし。</div>;

  const { selectedQuiz, questionState, totalQuestions, ...question } =
    questions;

  const renderLogo = () => {
    return (
      <Logo
        title={selectedQuiz.title}
        icon={selectedQuiz.icon}
        iconBgColor={selectedQuiz.bgIconColor}
      />
    );
  };
  if (questionState.finish) {
    return (
      <ScorePage
        score={questionState.score}
        total={totalQuestions}
        renderLogo={renderLogo}
      />
    );
  }
  return (
    <QuizPage
      renderLogo={renderLogo}
      questionState={questionState}
      selectedQuiz={selectedQuiz}
      totalQuestions={totalQuestions}
      {...question}
    />
  );
};

export { QuizPageContainer };
