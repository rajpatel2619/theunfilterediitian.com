import type { Metadata } from "next";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/manrope/latin-800.css";
import "@fontsource/syne/latin-700.css";
import "@fontsource/syne/latin-800.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Unfiltered IITian",
    template: "%s | The Unfiltered IITian",
  },
  description:
    "The Unfiltered IITian is a WhatsApp-first student community for live courses, mentorship sessions, resume reviews, and practical career guidance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="siteShell">
          <SiteHeader />
          <main className="siteContent">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
