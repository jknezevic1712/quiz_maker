import "~/styles/globals.css";

import { Inter } from "next/font/google";

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
    <html lang="en">
      <body
        className={`flex min-h-screen w-full flex-col items-center justify-start bg-zinc-50 p-4 font-sans ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
