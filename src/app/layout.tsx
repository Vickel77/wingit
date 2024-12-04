import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wingit Nigeria",
  description: "Best food for you taste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className=" flex flex-col text-black items-center justify-between bg-primary-accent">
          <NavBar />

          {children}
          <footer className="w-full">
            <div className="w-full h-100 bg-primary">
              <Footer />
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
