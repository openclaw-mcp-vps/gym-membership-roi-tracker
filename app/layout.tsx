import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Membership ROI Tracker — Is Your Gym Worth It?",
  description: "Log gym visits, calculate cost per visit, and find out if your gym membership is actually worth the money."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="88f30f0f-e38e-4010-a31f-78193b01e333"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
