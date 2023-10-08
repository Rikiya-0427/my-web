import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./components/Provider";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maeda Rikiya",
  description: "趣味で開発や研究をしているエンジニアです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-black flex flex-col min-h-screen dark:bg-[#090908] dark:text-white h-full selection:bg-teal-200 dark:selection:bg-teal-800`}
      >
        <Provider>
          <Navbar />
          <main className="mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
