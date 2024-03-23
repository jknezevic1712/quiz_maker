import { useForm } from "react-hook-form";
import { Fragment, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
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
// types
import { Quiz } from "~/lib/types/api";

type EditQuizPopupProps = {
  item: Quiz;
  isPopupOpen: boolean;
  closePopup: () => void;
  saveFn: (quiz: Quiz) => void;
};
export default function EditQuizPopup({
  item,
  isPopupOpen,
  closePopup,
  saveFn,
}: EditQuizPopupProps) {
  const form = useForm<z.infer<typeof QuizFormSchema>>({
    resolver: zodResolver(QuizFormSchema),
    defaultValues: item,
  });

  function onSubmit(formData: z.infer<typeof QuizFormSchema>) {
    saveFn(formData);
  }

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      closePopup();
      form.reset();
    }
  }, [form.formState.isSubmitSuccessful, form.reset]);

  return (
    <DialogRoot open={isPopupOpen} onOpenChange={closePopup}>
      <div className="max-h-[600] overflow-y-scroll">
        <DialogContent className="bg-zinc-100 sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Quiz</DialogTitle>
          </DialogHeader>

          <Separator />

          <Form {...form}>
            <form
              id="dialogForm"
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-h-[600px] space-y-6 overflow-y-scroll"
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

              {form.getValues().questions.map((q, idx) => (
                <Fragment key={q.id}>
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
                            rows={5}
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
      </div>
    </DialogRoot>
  );
}
