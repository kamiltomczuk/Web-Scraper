import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Amazon Web Scraper",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen">
        {/* Sidebar */}
        <Sidebar />
        <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
