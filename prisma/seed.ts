import fs from "fs";
import path from "path";

import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

export async function main() {
  // JSON ファイルを読み込む（例: prisma/data/quizzes.json）
  const dataPath = path.join(__dirname, "data.json");
  const raw = fs.readFileSync(dataPath, "utf-8");
  const { quizzes } = JSON.parse(raw) as {
    quizzes: Array<{
      title: string;
      icon: string;
      bgIconColor: string;
      questions: Array<{
        question: string;
        options: string[];
        answer: string;
      }>;
    }>;
  };
  // 全削除
  // 子レコードから
  await prisma.question.deleteMany({});
  // 続いて親レコード
  await prisma.quiz.deleteMany({});
  // 追加
  for (const quiz of quizzes) {
    // Quiz レコードを作成
    const createdQuiz = await prisma.quiz.create({
      data: {
        title: quiz.title,
        icon: quiz.icon,
        bgIconColor: quiz.bgIconColor,
        questions: {
          create: quiz.questions.map((q) => ({
            question: q.question,
            options: q.options,
            answer: q.answer,
          })),
        },
      },
    });
    console.log(`Created quiz ${createdQuiz.id}: ${createdQuiz.title}`);
  }
}

main();
