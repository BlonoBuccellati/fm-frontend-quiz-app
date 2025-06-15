import prisma from "@/shared/lib/prisma";

import { QuizWithQuestionModel } from "../model/quiz";

export async function getAllQuiz(): Promise<QuizWithQuestionModel[]> {
  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });
  return quizzes;
}
