import Home from "@/modules/home";
import type { Metadata } from "next";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "World University Hub",
  keywords: "university, study abroad",
  description: "Find Universities Abroad that are Right for You",
  openGraph: {
    url: `${baseUrl}`,
    siteName: "World University Hub",
    // images: [`/meta/unihub-meta.jpg`],
    locale: "en_US",
    type: "website",
  },
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
