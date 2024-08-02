import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/features/header/components/header/header";

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "A clone of the ui of the famous video player, Youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-[100vw] ${roboto.className}`}>
        <Header />
        <div className="flex flex-col h-[calc(100vh-56px)]">{children}</div>
      </body>
    </html>
  );
}
