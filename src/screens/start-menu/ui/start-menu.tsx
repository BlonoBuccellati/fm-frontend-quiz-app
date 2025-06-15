"use client";

import Link from "next/link";

import { useStore } from "@/app/_store";
import ButtonWithIcon from "@/screens/start-menu/ui/button-with-icon";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";

const StartMenu = () => {
  const { quizzes } = useStore();
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
          {quizzes.map((quiz) => {
            console.log(`quiz/${quiz.id}`);
            return (
              <Link href={`quiz/${quiz.id}`} key={quiz.id}>
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
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default StartMenu;
