import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./components/SmoothScrolling";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Sarmad Zaryan - React Native Developer",
  description:
    "Sarmad Zaryan is a highly skilled React Native developer with 4 years of experience in building seamless cross-platform mobile applications. Known for his expertise in integrating push notifications, enhancing user engagement, and delivering high-performance, user-friendly apps.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
