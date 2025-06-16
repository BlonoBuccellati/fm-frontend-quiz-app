"use client";

import { PropsWithChildren, useEffect } from "react";

import { QuizWithQuestionModel } from "@/shared/model/quiz";

import { useStore } from "../_store";

type ClientWrapperProps = {
  quizzes: QuizWithQuestionModel[];
};
const ClientWrapper = ({
  quizzes,
  children,
}: PropsWithChildren<ClientWrapperProps>) => {
  const { setQuizzes } = useStore();
  useEffect(() => {
    setQuizzes(quizzes);
  }, [setQuizzes, quizzes]);
  return <>{children}</>;
};

export default ClientWrapper;
