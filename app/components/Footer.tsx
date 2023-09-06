"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg mt-auto shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2023{" "}
          <a href="https://my-web-three-kappa.vercel.app/" className="hover:underline">
            Maeda Rikiya
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://github.com/Rikiya-0427/my-web/blob/main/LICENCE.txt" target="_blank" rel="noopener" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="mailto:maeda.84gjksoca@gmail.com" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
