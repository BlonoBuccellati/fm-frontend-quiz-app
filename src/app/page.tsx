import { use } from "react";

import { StartMenu } from "@/screens/start-menu";
import { getAllQuiz } from "@/shared/api/getAllQuiz";

export default function Home() {
  const quizzes = use(getAllQuiz());

  return <StartMenu quizzes={quizzes} />;
}
