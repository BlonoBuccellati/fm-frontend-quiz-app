"use client";

import Link from "next/link";

import { useStore } from "@/app/_store";
import ButtonWithIcon from "@/screens/start-menu/ui/button-with-icon";
import { cn } from "@/shared/lib/utils";
import { QuizWithQuestionModel } from "@/shared/model/quiz";
import ThemeSwitch from "@/shared/ui/elements/switch/theme-switch";
import { HeaderContainer } from "@/shared/ui/layouts/header-container";

const Title = () => {
  return (
    <div className="space-y-200">
      <h1 className="typo-2-light space-y-100">
        <span className="block">Welcome to the</span>
        <span className="typo-2 block">Frontend Quiz!</span>
      </h1>
      <p className="typo-5-italic">Pick a subject to get started.</p>
    </div>
  );
};

type ButtonListProps = {
  quizzes: QuizWithQuestionModel[];
  className?: string;
};
const ButtonList = ({ quizzes, className }: ButtonListProps) => {
  return (
    <div className={cn("space-y-sm-200-to-md-300", className)}>
      {quizzes.map((quiz) => (
        <Link href={`quiz/${quiz.title}`} key={quiz.id} className="block">
          <ButtonWithIcon
            title={quiz.title}
            iconSrc={quiz.icon}
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
  );
};

const StartMenu = () => {
  const { quizzes } = useStore();
  return (
    <div className="space-y-200">
      <HeaderContainer className="flex flex-row-reverse">
        <ThemeSwitch />
      </HeaderContainer>
      <main className="desktop:flex desktop:space-x-1600 desktop:space-y-0 space-y-800">
        <Title />
        <ButtonList quizzes={quizzes} className="flex-[1]" />
      </main>
    </div>
  );
};

export { StartMenu };
