"use client";

import { PropsWithChildren, useEffect } from "react";

import { QuizWithQuestionModel } from "@/shared/model/quiz";

import { useStore } from ".";

type ClientWrapperProps = {
  quizzes: QuizWithQuestionModel[];
};
const ClientWrapper = ({
  quizzes,
  children,
}: PropsWithChildren<ClientWrapperProps>) => {
  // クイズをグローバルに状態管理（TODO:これ用のコンテナを用意したい）
  const { setQuizzes } = useStore();
  useEffect(() => {
    setQuizzes(quizzes);
  }, [setQuizzes, quizzes]);
  return <>{children}</>;
};

export default ClientWrapper;
