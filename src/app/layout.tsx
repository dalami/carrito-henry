import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Nav/NavBar";
import Footer from "../components/Footer/Footer";
import { AuthProvider } from "@/contexto/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Carrito de Compras",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          defer
        ></script>
      </head>
      <AuthProvider>
      <body className={montserrat.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
      </AuthProvider>
    </html>
  );
}
