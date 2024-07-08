import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import DashBoard from "../dashBoard/page";
import Compras from "./compras/compras";

const inter = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DashBoard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      {children}
      <DashBoard />
      

    </div>
  );
}
