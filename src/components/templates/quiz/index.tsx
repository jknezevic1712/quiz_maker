"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// components
import { Button } from "~/components/atoms/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import QuizContent from "~/components/molecules/quizContent";
import Link from "next/link";
// types
import { useQuizMakerStore } from "~/lib/store/provider";

type QuizTemplateProps = { quizID: string };
export default function QuizTemplate({ quizID }: QuizTemplateProps) {
  const router = useRouter();

  const quiz = useQuizMakerStore(
    (s) => s.quizzes.find((q) => q.id === quizID)!,
  );
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  function handleQuizExit() {
    const res = confirm("Are you sure you want to quit this quiz?");

    if (!res) return;
    router.push("/");
  }

  function previousQuestion() {
    setActiveQuestionIdx((prev) => prev - 1);
  }

  function nextQuestion() {
    setActiveQuestionIdx((prev) => prev + 1);
  }

  return (
    <div className="relative flex w-full flex-col items-center justify-start p-8 shadow-2xl">
      <span className="absolute left-0 top-0 p-2 md:p-4">
        <Button
          title="Show answer"
          variant="destructive"
          size="sm"
          onClick={handleQuizExit}
        >
          <X />
        </Button>
      </span>

      <h2 className="w-full pb-16 text-center text-2xl font-bold capitalize italic md:pb-32">
        {quiz.name}
      </h2>

      <div className="flex w-full items-center justify-between lg:max-w-3xl">
        <Button
          className="px-1 md:px-4 md:py-2"
          title="Add question"
          type="button"
          variant="secondary"
          disabled={activeQuestionIdx === 0}
          onClick={previousQuestion}
        >
          <ArrowLeft />
        </Button>

        <div className="flex w-full flex-col items-center justify-center gap-8 text-center md:max-w-lg">
          {quiz.questions.map((q, idx) => {
            if (idx !== activeQuestionIdx) return null;

            return (
              <QuizContent key={q.id} question={q.question} answer={q.answer} />
            );
          })}
        </div>

        <Button
          className="px-1 md:px-4 md:py-2"
          title="Add question"
          type="button"
          variant="secondary"
          disabled={activeQuestionIdx === quiz.questions.length - 1}
          onClick={nextQuestion}
        >
          <ArrowRight />
        </Button>
      </div>

      <div
        className={`flex w-full items-center justify-center pt-16 transition-all md:pt-32 ${activeQuestionIdx === quiz.questions.length - 1 ? "pointer-events-auto h-28 opacity-100" : "pointer-events-none h-0 opacity-0"}`}
      >
        <Link href="/">
          <Button title="Finish" type="button" variant="secondary">
            Finish
          </Button>
        </Link>
      </div>
    </div>
  );
}
