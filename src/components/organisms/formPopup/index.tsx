import { useFieldArray, useForm } from "react-hook-form";
import { Fragment, useEffect } from "react";
// components
import {
  DialogRoot,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
} from "~/components/molecules/dialog";
import { Button } from "~/components/atoms/button";
import Textarea from "~/components/atoms/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/molecules/form";
import { Input } from "~/components/atoms/input";
import { QuizFormSchema } from "~/lib/assets/formSchemas";
import Separator from "~/components/atoms/separator";
import { Minus, Plus } from "lucide-react";
import QuestionSuggestionPopover from "../questionSuggestionPopover";
// utils
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { useQuizMakerStore } from "~/lib/store/provider";
// types
import { Quiz } from "~/lib/types/api";

type FormPopupFormSchema = Omit<z.infer<typeof QuizFormSchema>, "id">;

const defaultValues: FormPopupFormSchema = {
  name: "",
  questions: [
    {
      id: crypto.randomUUID(),
      question: "",
      answer: "",
    },
  ],
};

type FormPopupProps = {
  saveFn: (quiz: Quiz) => void;
  isPopupOpen: boolean;
  closePopup: () => void;
  quiz?: Quiz;
};
export default function FormPopup({
  saveFn,
  isPopupOpen,
  closePopup,
  quiz,
}: FormPopupProps) {
  const quizQuestions = useQuizMakerStore((s) => s.quizQuestions);

  const form = useForm<FormPopupFormSchema>({
    resolver: zodResolver(QuizFormSchema),
    defaultValues: quiz ?? defaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const isSaveDisabled =
    JSON.stringify(quiz) === JSON.stringify(form.getValues());

  function onSubmit(formData: FormPopupFormSchema) {
    if (quiz) {
      if (JSON.stringify(formData) === JSON.stringify(quiz)) return;
      return saveFn(formData as Quiz);
    }

    saveFn({ id: crypto.randomUUID(), ...formData });
  }

  function addNewQuestion() {
    const newQuestion = {
      id: crypto.randomUUID(),
      question: "",
      answer: "",
    };
    append(newQuestion);
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      closePopup();
      form.reset();
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <DialogRoot open={isPopupOpen} onOpenChange={closePopup}>
      <DialogContent className="bg-zinc-100 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{quiz ? "Edit Quiz" : "New Quiz"}</DialogTitle>
        </DialogHeader>

        <Separator />

        <Form {...form}>
          <form
            id="dialogForm"
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-h-[600px] space-y-6 overflow-y-scroll"
          >
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="italic">Quiz Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your quiz name here..."
                      {...field}
                      {...form.register("name")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, idx) => (
              <Fragment key={field.id}>
                <div className="flex w-full items-center justify-between border-b border-zinc-950 pb-2">
                  <h2 className="italic">Question {idx + 1}</h2>
                  <Button
                    title="Delete question"
                    type="button"
                    variant="destructive"
                    onClick={() => remove(idx)}
                    disabled={idx === 0}
                  >
                    <Minus />
                  </Button>
                </div>

                <FormField
                  name={`questions.${idx}.question`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <div className="relative flex flex-col items-end justify-center gap-2">
                          <Textarea
                            id={`questions.${idx}.question`}
                            rows={5}
                            placeholder="Type your question here..."
                            {...field}
                            {...form.register(
                              `questions.${idx}.question` as const,
                            )}
                          />
                          <QuestionSuggestionPopover
                            questions={quizQuestions}
                            insertSuggestedQuestion={(question) =>
                              form.setValue(
                                `questions.${idx}.question`,
                                question,
                                {
                                  shouldDirty: true,
                                },
                              )
                            }
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name={`questions.${idx}.answer`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type your answer here..."
                          {...field}
                          {...form.register(`questions.${idx}.answer` as const)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Fragment>
            ))}

            <Button
              title="Add question"
              type="button"
              variant="secondary"
              onClick={addNewQuestion}
            >
              <Plus />
            </Button>
          </form>
        </Form>

        <DialogFooter>
          <Button
            title="Save quiz"
            form="dialogForm"
            type="submit"
            variant="secondary"
            disabled={quiz ? isSaveDisabled : false}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
