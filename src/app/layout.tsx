import "~/styles/globals.css";

import { Inter } from "next/font/google";

// store
import { QuizMakerStoreProvider } from "~/lib/store/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Quiz Maker",
  description: "Quiz maker application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`flex w-full flex-col items-center justify-start bg-zinc-100 font-sans ${inter.variable}`}
      >
        <QuizMakerStoreProvider>{children}</QuizMakerStoreProvider>
      </body>
    </html>
  );
}
