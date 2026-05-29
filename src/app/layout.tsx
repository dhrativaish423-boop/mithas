hereimport type { Metadata } from "next";
import "./globals.css"; // Points exactly to your globals.css file inside src/app/

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
}
