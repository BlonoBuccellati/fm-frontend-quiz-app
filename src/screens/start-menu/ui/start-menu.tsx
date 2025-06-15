"use client";

import Link from "next/link";
import { useEffect } from "react";

import { useStore } from "@/app/_store";
import ButtonWithIcon from "@/screens/start-menu/ui/button-with-icon";
import { QuizWithQuestions } from "@/shared/model/quiz";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";

const StartMenu = ({ quizzes }: { quizzes: QuizWithQuestions[] }) => {
  // クイズをグローバルに状態管理（TODO:これ用のコンテナを用意したい）
  const { setQuizzes } = useStore();
  useEffect(() => {
    setQuizzes(quizzes);
  }, [setQuizzes, quizzes]);

  return (
    <div className="space-y-200">
      <div className="flex justify-between px-100 py-200">
        <div className="" />
        <ThemeSwitch />
      </div>
      <header>
        <h1 className="typo-2-light">
          Welcome to the <span className="typo-2">Frontend Quiz</span>
        </h1>
        <p className="typo-5-italic">Pick a subject to get started.</p>
      </header>
      <main className="px-300 py-400">
        {/* ボタンリスト */}
        <div className="space-y-200">
          {quizzes.map((quiz) => (
            <Link href="quiz" key={quiz.id}>
              <ButtonWithIcon
                title={quiz.title}
                icon={quiz.icon}
                className="w-full"
                iconBgColor={
                  quiz.bgIconColor as
                    | "html"
                    | "css"
                    | "javaScript"
                    | "accessibility"
                }
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StartMenu;
