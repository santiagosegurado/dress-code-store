import "./globals.css";
import { Quicksand } from "next/font/google";

export const metadata = {
  title: "<dress-code/> | Store ",
  description:
    "La tienda de indumentaria que te ayuda a mostrar tu pasion por el desarrollo de software",
};

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>{children}</body>
    </html>
  );
}
