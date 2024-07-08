import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProdHome = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[80vw] m-auto">
    <div className="grid gap-4">
      <div>
        <Link href="../login">
        <h5 className="text-center font-bold animate-pulse  ">Descuento 50%</h5>
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SX679_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/91NZWrKZ+RL._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
           <h5 className="text-center font-bold animate-pulse  ">Super Oferta!!</h5>
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/61Mv4h1f4DL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            width={185}
            height={128}
            alt=""
          />
           <h5 className="text-center font-bold animate-pulse  ">Imperdible!!</h5>
        </Link>
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/71WWYV+pQ5L._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
           <h5 className="text-center font-bold animate-pulse  ">Precios Increibles</h5>
        </Link>
      </div>
      <div>
        <Link href="../login">
          {" "}
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/711MUquwAhL._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          {" "}
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/514pgzf2c2L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Link href="../login">
          {" "}
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/71KXxKKIwYL._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/91dVTQwOj9L._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/71yXqVYilZL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
    </div>
    <div className="grid gap-4">
      <div>
        <Link href="../login">
          {" "}
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/711URpcrI4L._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/7190HrzZe7L._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
      <div>
        <Link href="../login">
          <Image
            style={{ width: "auto" }}
            className="h-auto max-w-full rounded-lg cursor-pointer hover:scale-105"
            src="https://m.media-amazon.com/images/I/71w-rsrRUNL._AC_UY327_FMwebp_QL65_.jpg"
            width={185}
            height={128}
            alt=""
          />
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ProdHome