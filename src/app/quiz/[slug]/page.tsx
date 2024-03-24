// components
import QuizTemplate from "~/components/templates/quiz";

export default function QuizPage({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen w-full max-w-7xl items-center justify-center p-4">
      <QuizTemplate quizID={params.slug} />
    </main>
  );
}
