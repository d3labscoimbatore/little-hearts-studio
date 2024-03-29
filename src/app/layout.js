import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  // title:
  //   "Little Hearts Studio | Maternity • New Born • Toddler • Family Potraits",
  title:
    "Little Hearts Studio | Baby Photography Services",
  description:
    "Capturing precious moments with professional baby photography services. Cherish the joy of parenthood with our expert photographers specializing in newborn, infant, and toddler photo sessions. Book your session today for timeless memories.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>{children}</body>
    </html>
  );
}
