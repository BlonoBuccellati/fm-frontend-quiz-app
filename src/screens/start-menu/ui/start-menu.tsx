"use client";

import Link from "next/link";

import { useStore } from "@/app/_store";
import ButtonWithIcon from "@/screens/start-menu/ui/button-with-icon";
import { QuizWithQuestionDTO } from "@/shared/api/getAllQuiz";
import { cn } from "@/shared/lib/utils";
import { Header } from "@/shared/ui/header";
import Main from "@/shared/ui/main";
import ThemeSwitch from "@/shared/ui/switch/theme-switch";

const StartMenuHeader = () => {
  return (
    <Header className="flex flex-row-reverse">
      <ThemeSwitch />
    </Header>
  );
};
const Title = () => {
  return (
    <div className="space-y-sm-200-to-md-600">
      <h1 className="typo-2-light space-y-100">
        <span className="block">Welcome to the</span>
        <span className="typo-2 block">Frontend Quiz!</span>
      </h1>
      <p className="typo-5-italic">Pick a subject to get started.</p>
    </div>
  );
};

type ButtonListProps = {
  quizzes: QuizWithQuestionDTO[];
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
            iconBgColor={quiz.bgIconColor}
          />
        </Link>
      ))}
    </div>
  );
};

const StartMenu = () => {
  // TODO:SWRやreactQuery でフェッチでいいのでは？
  const { quizzes } = useStore();
  return (
    <div>
      <StartMenuHeader />
      <Main className="desktop:space-y-0 desktop:pt-0 space-y-800">
        <Title />
        <ButtonList quizzes={quizzes} className="desktop:flex-[1]" />
      </Main>
    </div>
  );
};

export { StartMenu };
