import { useState } from "react";
// components
import { Button } from "~/components/atoms/button";

type QuizContentProps = {
  question: string;
  answer: string;
};
export default function QuizContent({ question, answer }: QuizContentProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <h3 className="text-sm font-bold capitalize md:text-base lg:text-xl">
        {question}
      </h3>

      <p
        className={`text-sm font-semibold capitalize transition-all md:text-base lg:text-lg ${showAnswer ? "pointer-events-auto h-12 opacity-100" : "pointer-events-none h-0 opacity-0"}`}
      >
        {answer}
      </p>

      <Button
        title="Show answer"
        variant="info"
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        Show answer
      </Button>
    </>
  );
}
