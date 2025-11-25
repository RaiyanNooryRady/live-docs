import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./Provider";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Live Docs",
  description: "A live doc editor with facilities for collaborators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
     baseTheme: dark ,
     variables: {
      colorPrimary: "#3371FF",
      fontSize: "16px"
     }
    }}
    >
    <html lang="en">
      <body
        className={`${fontSans.variable} font-sans antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <Provider>
        {children}
        </Provider>
      
      </body>
    </html>
    </ClerkProvider>
  );
}
