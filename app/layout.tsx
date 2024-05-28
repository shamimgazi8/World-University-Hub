import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Providers } from "./providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/main.scss";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "World University Hub",
  metadataBase: new URL(`${baseUrl}`),
  // openGraph: {
  //   url: `${baseUrl}`,
  //   siteName: "World University Hub",
  //   images: ["/meta/unihub-meta.jpg"],
  //   locale: "en_US",
  //   type: "website",
  // },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
