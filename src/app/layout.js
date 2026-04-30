import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
         <Toaster position="top-right" />
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
