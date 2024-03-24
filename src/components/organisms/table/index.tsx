"use client";

// components
import TableItem from "~/components/molecules/tableItem";
import AddQuizPopup from "../addQuizPopup";
// store
import { useQuizMakerStore } from "~/lib/store/provider";

export default function Table() {
  const tableData = useQuizMakerStore((s) => s.quizzes);
  const addNewQuiz = useQuizMakerStore((s) => s.addNewQuiz);

  return (
    <div className="flex min-h-[180px] w-full flex-col rounded-sm bg-zinc-200 p-8 transition-all">
      <div className="flex items-center justify-between border-b-2 border-zinc-950 pb-2">
        <h2 className="text-xl font-bold capitalize italic">
          Quizzes Overview
        </h2>
        <AddQuizPopup saveFn={addNewQuiz} />
      </div>
      <div className="flex h-full flex-col justify-start">
        {tableData.map((item) => (
          <TableItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
