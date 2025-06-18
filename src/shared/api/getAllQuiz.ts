import {
  Quiz as QuizModel,
  Prisma,
  Question as QuestionModel,
} from "@/../prisma/generated/prisma";
import prisma from "@/shared/lib/prisma";

import { IconBgColor } from "../color/types";
import { ReplaceField } from "../lib/utility-types";

type QuizWithQuestionModel = Prisma.QuizGetPayload<{
  include: { questions: true };
}>;

// DTO
type QuizWithQuestionDTO = ReplaceField<
  QuizWithQuestionModel,
  "bgIconColor",
  IconBgColor
>;
type QuizDTO = ReplaceField<QuizModel, "bgIconColor", IconBgColor>;

// マッパー関数
function adaptQuizDTO(quizModel: QuizWithQuestionModel): QuizWithQuestionDTO {
  return {
    ...quizModel,
    bgIconColor: quizModel.bgIconColor as IconBgColor,
  };
}

export async function getAllQuiz(): Promise<QuizWithQuestionDTO[]> {
  const quizzes = await prisma.quiz.findMany({
    include: {
      questions: true,
    },
  });

  const quizzesDTO = quizzes.map((quiz) => adaptQuizDTO(quiz));
  return quizzesDTO;
}

export { type QuestionModel };
export { type QuizWithQuestionDTO, type QuizDTO };
