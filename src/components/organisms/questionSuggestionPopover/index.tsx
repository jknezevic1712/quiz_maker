// components
import { Button } from "~/components/atoms/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/molecules/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/molecules/select";
import { CircleHelp } from "lucide-react";
// types
import { Question } from "~/lib/types/api";

export default function QuestionSuggestionPopover({
  questions,
  insertSuggestedQuestion,
}: {
  questions: Question[];
  insertSuggestedQuestion: (question: string) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">
          <CircleHelp />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-50">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Question Suggestions</h4>
            <p className="text-muted-foreground text-sm">
              Pick one of the previously used questions.
            </p>
          </div>
          <div className="grid gap-2">
            <Select onValueChange={(e) => insertSuggestedQuestion(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a question" />
              </SelectTrigger>
              <SelectContent className="w-1/2 md:w-auto">
                <SelectGroup>
                  <SelectLabel>Questions</SelectLabel>
                  {questions.map((q) => (
                    <SelectItem key={q.id} value={q.question}>
                      {q.question}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
