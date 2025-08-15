"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
    >
      <input
        type="text"
        placeholder="name"
        {...register("name", { required: true })}
        className="w-full  p-2 text-[var(--color-foreground)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-with-opacity2)] border border-[var(--color-accent-with-opacity)] bg-[var(--background-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)] capitalize"
      />
      <input
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        className="w-full  p-2 text-[var(--color-foreground)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-with-opacity2)] border border-[var(--color-accent-with-opacity)] bg-[var(--background-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)] capitalize"
      />
      <textarea
        placeholder="message"
        className="w-full  p-2 text-[var(--color-foreground)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-with-opacity2)] border border-[var(--color-accent-with-opacity)] bg-[var(--background-with-opacity)] border-solid backdrop-blur-[6px] shadow-[var(--shadow-glass-inset)] hover:shadow-[var(--shadow-glass-sm)] capitalize"
        {...register("message", { required: true, max: 256, min: 50 })}
      />
      <input
        value="Cast your message!"
        type="submit"
        className="px-10 py-4 rounded-md bg-[var(--color-background)] shadow-lg border border-[var(--color-accent-with-opacity)] border-solid backdrop-blur-sm hover:shadow-[var(--shadow-glass-sm)] transition-shadow duration-300 ease-in-out text-[var(--color-foreground) focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-with-opacity2)] cursor-pointer capitalize"
      />
    </form>
  );
}
