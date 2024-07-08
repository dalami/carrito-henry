"use client";
import Image from "next/image";
import Link from "next/link";
import CottageIcon from "@mui/icons-material/Cottage";
import { useAuth } from "@/contexto/AuthProvider";

import { useRouter } from "next/navigation";


const NavBar: React.FC = () => {
  const { userData, setUserData } = useAuth();
  const router = useRouter()
  
  const signOut = () => {
    setUserData(null)
    localStorage.clear()
    router.push('/')

  };

 return (
    <div className="bg-neutral-300 max-w-[80%] m-auto">
      <div className="flex flex-row items-center justify-start gap-80 w-full p-4 ">
        <h1 className="flex-shrink-0 ml-12">
          {" "}
          <Image
            src="/logo.jpg"
            width={100}
            height={100}
            priority
            alt="logo"
          ></Image>
        </h1>
        <h1 className="text-3xl">Mercado Online</h1>
      </div>
      <div className="flex flex-row justify-evenly mx-20">
        <nav className="relative">
          <Link href="/">
            <CottageIcon
              style={{ color: "white", fontSize: "40px", marginRight: "" }}
            />
          </Link>
        </nav>
        <nav className="ml-auto flex space-x-4">
          {/* <Link href="/product" className="p-2  bg-blue-500 text-white rounded-md">
                   Productos 
                </Link> */}
          {userData ? (
            <>
            <p className="text-2xl ">{userData.user.name}</p>
            <button className="mb-2 " onClick={signOut}>Salir</button>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="p-2  bg-blue-500 text-white rounded-md"
              >
                Registrarse
              </Link>
              <Link
                href="/login"
                className="p-2  bg-blue-500 text-white rounded-md"
              >
                Ingresar
              </Link>
            </>
          )}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
