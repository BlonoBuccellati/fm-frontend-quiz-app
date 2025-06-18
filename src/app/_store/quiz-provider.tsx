"use client";

import { PropsWithChildren, useEffect } from "react";

import { QuizWithQuestionDTO } from "@/shared/api/getAllQuiz";

import { useStore } from ".";

type QuizProviderProps = {
  quizzes: QuizWithQuestionDTO[];
};
const QuizProvider = ({
  quizzes,
  children,
}: PropsWithChildren<QuizProviderProps>) => {
  const { setQuizzes } = useStore();
  useEffect(() => {
    setQuizzes(quizzes);
  }, [setQuizzes, quizzes]);
  return <>{children}</>;
};

export default QuizProvider;
