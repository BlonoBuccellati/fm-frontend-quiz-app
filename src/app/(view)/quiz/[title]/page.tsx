import { QuizPage } from "@/screens/quiz";

// searchParamsとして送られてくるため、params.idの形式にする必要がある。
export default async function Page({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  return <QuizPage title={title} />;
}
