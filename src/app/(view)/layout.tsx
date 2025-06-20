import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { use } from "react";
import "@/app/_styles/globals.css";

import { ThemeProvider } from "@/app/_providers/theme-provider";
import { getAllQuiz } from "@/shared/api/getAllQuiz";
import BgImageLayout from "@/shared/ui/bg-image-layout";

import QuizProvider from "../_store/quiz-provider";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Frontend quiz app",
  description: "Frontend quiz app",
  icons: "favicon-32x32.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const quizzes = use(getAllQuiz());
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <QuizProvider quizzes={quizzes}>
            <BgImageLayout />
            <div className="desktop:max-w-[72.5rem] mx-auto max-w-[40rem] px-300 pb-400">
              {children}
            </div>
          </QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
