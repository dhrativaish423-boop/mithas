import type { Metadata } from "nextimport type { Metadata } from "next";
import "@/app/globals.css"; // Pure absolute path to catch src/app/globals.css straight away!

export const metadata: Metadata = {
  title: "Mithaas Lucknow",
  description: "Lucknow ka swad, mandiron ka aashirwad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#FFFDF9" }}>
        {children}
      </body>
    </html>
  );
}￼Enter
