import QuizPage from "@/screens/quiz/ui/layouts/quiz-page";

type Props = {
  // searchParamsとして送られてくるため、params.idの形式にする必要がある。
  params: {
    id: string; // URL の動的セグメント [id] が文字列として渡される
  };
};
export default function Page({ params }: Props) {
  return <QuizPage id={params.id} />;
}
