"use client";

import { useRef } from "react";
import { postBlog } from "../action";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Writeblog() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  return (
    <form
      action={async (formData) => {
        await postBlog(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="flex flex-col items-center text-sm mb-5"
      style={{ opacity: pending ? 0.7 : 1 }}
    >
      <input
        type="text"
        placeholder="ブログのタイトル"
        name="title"
        required
        disabled={pending}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <input
        type="text"
        placeholder="ブログの種類"
        name="type"
        required
        disabled={pending}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <input
        type="text"
        placeholder="ブログの内容"
        name="content"
        required
        disabled={pending}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        type="submit"
        className="flex items-center justify-center font-bold h-12 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded-md w-64"
      >
        ブログを投稿する
      </button>
    </form>
  );
}
