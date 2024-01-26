import { Inter, Josefin_Sans } from "next/font/google";
import "./globals.css";

const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Little Hearts Studio",
  description: "Baby Photography",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>{children}</body>
    </html>
  );
}
