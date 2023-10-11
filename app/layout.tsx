import Script from "next/script";
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
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-577947023"></Script>
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-577947023');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}
