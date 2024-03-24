import { useState } from "react";
// components
import { Button } from "~/components/atoms/button";

type QuizContentProps = {
  question: string;
  answer: string;
};
export default function QuizContent({ question, answer }: QuizContentProps) {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  return (
    <>
      <h3 className="text-sm font-bold capitalize md:text-base lg:text-xl">
        {question}
      </h3>
      <Button
        title="Show answer"
        variant="info"
        onClick={() => setIsAnswerShown((prev) => !prev)}
      >
        Show answer
      </Button>
      {isAnswerShown && (
        <p className="text-sm capitalize md:text-base lg:text-lg">{answer}</p>
      )}
    </>
  );
}
