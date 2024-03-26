"use client";

import { useState } from "react";
// components
import TableItem from "~/components/molecules/tableItem";
import FormPopup from "../formPopup";
// store
import { useQuizMakerStore } from "~/lib/store/provider";
import { Button } from "~/components/atoms/button";

function TableHeader() {
  const addNewQuiz = useQuizMakerStore((s) => s.addNewQuiz);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 border-b-2 border-zinc-950 pb-2 md:flex-row md:gap-0">
        <h2 className="text-xl font-bold capitalize italic">
          Quizzes Overview
        </h2>
        <Button
          title="New quiz"
          variant="secondary"
          onClick={() => setIsPopupOpen(true)}
        >
          New Quiz
        </Button>
      </div>
      {isPopupOpen && (
        <FormPopup
          saveFn={addNewQuiz}
          isPopupOpen={isPopupOpen}
          closePopup={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}

export default function Table() {
  const tableData = useQuizMakerStore((s) => s.quizzes);

  return (
    <div className="flex min-h-[180px] w-full flex-col rounded-sm bg-zinc-200 p-8 transition-all">
      <TableHeader />
      <div className="flex h-full flex-col justify-start">
        {tableData.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
