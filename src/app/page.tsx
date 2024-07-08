import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { Carrousel } from "@/components/carrousel/Carrousel";
import { ProdHome } from "@/components/ProdHome/ProdHome";
import React, { Suspense } from "react";

export default function Home() {

   const Carrousel = React.lazy(()=>import("@/components/carrousel/Carrousel"))
   const ProdHome = React.lazy(()=> import("@/components/ProdHome/ProdHome"))

  return (
    <div>
      <Suspense fallback={<div className="text-2xl">Loading...</div>}>
        <Carrousel />
      </Suspense>
        <ProdHome />
    </div>
  );
}
