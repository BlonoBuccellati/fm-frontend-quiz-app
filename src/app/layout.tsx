import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { use } from "react";

import { ThemeProvider } from "@/app/_providers/theme-provider";
import { getAllQuiz } from "@/shared/api/getAllQuiz";
import "./_styles/globals.css";

import ClientWrapper from "./_store/client-wrapper";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  style: "normal",
  weight: ["300", "400", "500"],
});

const rubikItalic = Rubik({
  variable: "--font-rubik-italic",
  subsets: ["latin"],
  style: "italic",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Frontend quiz app",
  description: "Frontend quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const quizzes = use(getAllQuiz());
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rubik.variable} ${rubikItalic.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          // disableTransitionOnChange
        >
          <ClientWrapper quizzes={quizzes}>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
