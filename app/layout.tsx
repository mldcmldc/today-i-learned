import type { Metadata } from "next";
import { DotGothic16, Roboto } from "next/font/google";
import "./globals.css";

const dotGothic = DotGothic16({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dotGothic",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dotGothic.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
