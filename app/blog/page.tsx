import Writeblog from "../components/Writeblog";
import prisma from "../db";

async function getBlogs() {
  const data = await prisma.blog.findMany({
    take: 50,
    orderBy: {
      created_at: "desc",
    },
  });

  return data;
}

export const revalidate = 60;

export default async function Blog() {
  const data = await getBlogs();
  return (
    <div className="divide-y divide-gray-200 dark:divide-fray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
      </div>
      <div className="w-full">
        <div className="max-w-[500px] mx-auto mt-8">
          <Writeblog />

          <div className="flex flex-col space-y-2">
            {data.map((blog) => (
              <div key={blog.id} className="w-full text-sm break-words">
                {blog.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
