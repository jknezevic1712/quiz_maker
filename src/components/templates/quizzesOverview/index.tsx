"use client";

import { useState } from "react";
import Table from "~/components/organisms/table";
// utils
import { mockQuizzes } from "~/lib/assets/mockData";

export default function QuizzesOverviewTemplate() {
  const [quizzes, setQuizzes] = useState(mockQuizzes);

  return (
    <div className="flex w-full flex-col items-center justify-start shadow-2xl">
      <Table tableData={quizzes} setTableData={setQuizzes} />
    </div>
  );
}
