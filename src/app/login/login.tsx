"use client";
import Link from "next/link";
import {  useState } from "react";
import { fetchLogin } from "../fetching/fetch";
import { useRouter } from "next/navigation";
import { ValidLogErrorsProps } from "@/interface/CardData";
import { loginValidation } from "@/components/validation/errors";
import { useAuth } from "@/contexto/AuthProvider";

const Login: React.FC = () => {
  const Router = useRouter();
  const { setUserData, setCart } = useAuth();

  const [error, setError] = useState<ValidLogErrorsProps>({
    email: "",
    password: "",
  });
  const [logueo, setLogueo] = useState({
    email: "",
    password: "",
  });

  const hndleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogueo({
      ...logueo,
      [e.target.id]: e.target.value,
    });
    setError(loginValidation(logueo));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetchLogin(logueo);
      console.log("Usuario logueado correctamente", response);
      if (response.token) {
        const userSession = {
          token: response.token,
          user: response.user,
        };
        setUserData(userSession);

      
        const localStorageCart = localStorage.getItem(`cart_${response.user.id}`);
        if (localStorageCart) {
          setCart(JSON.parse(localStorageCart));
        } else {
          setCart([]);
        }

        localStorage.setItem("userSession", JSON.stringify(userSession));
        alert("Usuario logueado correctamente");
        Router.push("/login/dashBoard");
      } else {
        alert("Error al iniciar sesión");
      }
    } catch (error) {
      console.log("Error al loguearse", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen max-w-[80vw] m-auto box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Formulario de Inicio de Sesión
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            value={logueo.email}
            type="email"
            placeholder="Email"
            onChange={hndleOnchange}
          />
          {error.email && (
            <p className="text-red-500 text-center">{error.email}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            value={logueo.password}
            type="password"
            placeholder="Password"
            onChange={hndleOnchange}
          />

          {error.password && (
            <p className="text-red-500 text-center">{error.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // type="button"
            // onClick={handleLogin}
          >
            Iniciar Sesión
          </button>
          <span>Aun no tienes cuenta?</span>
          <Link href="/register">
            <button
              className="bg-blue-500 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Creala
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
