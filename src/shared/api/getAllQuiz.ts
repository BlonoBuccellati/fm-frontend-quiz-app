import prisma from "@/shared/lib/prisma";

import { QuizWithQuestions } from "../model/quiz";

export async function getAllQuiz(): Promise<QuizWithQuestions[]> {
  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });
  return quizzes;
}
