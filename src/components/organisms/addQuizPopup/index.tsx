import { useFieldArray, useForm } from "react-hook-form";
import { Fragment, useEffect } from "react";
// components
import {
  DialogRoot,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  closeDialog,
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
// utils
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
// types
import { Quiz } from "~/lib/types/api";

type AddQuizFormSchema = Omit<z.infer<typeof QuizFormSchema>, "id">;

const defaultValues: AddQuizFormSchema = {
  name: "",
  questions: [
    {
      id: crypto.randomUUID(),
      question: "",
      answer: "",
    },
  ],
};

type AddQuizPopupProps = {
  saveFn: (quiz: Quiz) => void;
};
export default function AddQuizPopup({ saveFn }: AddQuizPopupProps) {
  const form = useForm<AddQuizFormSchema>({
    resolver: zodResolver(QuizFormSchema),
    defaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  function onSubmit(formData: AddQuizFormSchema) {
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
      closeDialog();
      form.reset();
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <DialogRoot>
      <DialogTrigger asChild>
        <Button
          title="New quiz"
          className="w-full md:w-fit"
          variant="secondary"
        >
          New Quiz
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-zinc-100 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Quiz</DialogTitle>
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
                        <Textarea
                          rows={5}
                          placeholder="Type your question here..."
                          {...field}
                          {...form.register(
                            `questions.${idx}.question` as const,
                          )}
                        />
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
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
