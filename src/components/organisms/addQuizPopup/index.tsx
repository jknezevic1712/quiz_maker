import { useForm } from "react-hook-form";
import { Fragment } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
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
// types
import { Quiz } from "~/lib/types/api";

const defaultValues: z.infer<typeof QuizFormSchema> = {
  name: "",
  questions: [
    {
      question: "",
      answer: "",
    },
  ],
};

type AddQuizPopupProps = {
  saveFn: (quiz: Omit<Quiz, "id">) => void;
};
export default function AddQuizPopup({ saveFn }: AddQuizPopupProps) {
  const form = useForm<z.infer<typeof QuizFormSchema>>({
    resolver: zodResolver(QuizFormSchema),
    defaultValues,
  });

  function onSubmit(formData: z.infer<typeof QuizFormSchema>) {
    saveFn(formData as Omit<Quiz, "id">);

    closeDialog();
    form.reset();
  }

  // useEffect(() => {
  //   if (form.formState.isSubmitSuccessful) {
  //     closeDialog();
  //     form.reset();
  //   }
  // }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <DialogRoot modal={true}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-fit" variant="default">
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
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="italic">Quiz Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type your quiz name here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.getValues().questions.map((_q, idx) => (
              <Fragment key={"question-" + idx}>
                <h2 className="w-full border-b border-zinc-950 pb-2 italic">
                  Question {idx + 1}
                </h2>
                <FormField
                  control={form.control}
                  name={`questions.${idx}.question`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Question</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your question here..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`questions.${idx}.answer`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Type your answer here..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </Fragment>
            ))}
          </form>
        </Form>

        <DialogFooter>
          <Button form="dialogForm" type="submit" variant="ghost">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
