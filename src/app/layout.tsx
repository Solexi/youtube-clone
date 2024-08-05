import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/features/header/components/header";
import { SidebarProvider } from "@/features/sidebar/hooks/context/SidebarContext";
import { SearchProvider } from "@/hooks/contexts/SearchContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

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
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={`max-w-[100vw] ${roboto.className}`}>
        <SidebarProvider>
          <SearchProvider>
            <Header />
          </SearchProvider>
          <div className="flex flex-col h-[calc(100vh-56px)] overflow-auto custom-scrollbar">
            {children}
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
