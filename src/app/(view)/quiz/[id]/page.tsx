import { QuizPage } from "@/screens/quiz";

// searchParamsとして送られてくるため、params.idの形式にする必要がある。
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <QuizPage id={id} />;
}
