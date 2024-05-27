"use client";

import { useState, useTransition } from "react";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { register } from "@/actions/register";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Hashirama Senju"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="hashirama.senju@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="*******"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sex"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Sex</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      disabled={isPending}
                      className="flex flex-row justify-start"
                    >
                      <FormItem className="items-center space-x-3 space-y-0">
                        <FormControl className="items-center">
                          <RadioGroupItem value="male" />
                        </FormControl>
                        <FormLabel className="font-normal">Male</FormLabel>
                      </FormItem>
                      <FormItem className="items-center space-x-3 space-y-0">
                        <FormControl className="items-center">
                          <RadioGroupItem value="female" />
                        </FormControl>
                        <FormLabel className="font-normal">Female</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Home</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Kazakhstan</SelectLabel>
                        <SelectItem value="AstanaCity">Astana</SelectItem>
                        <SelectItem value="AlmatyCity">Almaty</SelectItem>
                        <SelectItem value="ShymkentCity">Shymkent</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Akmola region</SelectLabel>
                        <SelectItem value="KokshetauCity">Kokshetau</SelectItem>
                        <SelectItem value="AkmolaRegion">
                          Akmola region
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Aktobe region</SelectLabel>
                        <SelectItem value="AktobeCity">Aktobe</SelectItem>
                        <SelectItem value="AktobeRegion">
                          Aktobe region
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>West Kazakhstan region</SelectLabel>
                        <SelectItem value="Uralsk">Uralsk</SelectItem>
                        <SelectItem value="WestKazakhstanRegion">
                          West-Kazakhstan region
                        </SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Other country</SelectLabel>
                        <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                        <SelectItem value="russia">Russia</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your school" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bil">BIL</SelectItem>
                      <SelectItem value="nis">NIS</SelectItem>
                      <SelectItem value="public">
                        Other public school
                      </SelectItem>
                      <SelectItem value="private">
                        Other private school
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit" className="w-full">
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
