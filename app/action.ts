"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function postBlog(formData: FormData) {
  "use server";

  const data = await prisma.blog.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      type: formData.get("type") as string,
    },
  });

  // 投稿時にリアルタイムで画面に反映させる
  revalidatePath("/blog")
}
