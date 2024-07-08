"use client";

import { getAllOrders } from "@/app/fetching/fetch";
import { useAuth } from "@/contexto/AuthProvider";
import UseCart from "@/hooks/useCart";
import Image from "next/image";
import Link from "next/link";

export const Compras: React.FC = () => {
  const { userData } = useAuth();

  const {
    cart,
    setCart,
    removeCart,
    lessQuantity,
    moreQuantity,
    clearCart,
    isEmpty,
    totalCart,
  } = UseCart();

  const handleContinuar = async () => {
    if(cart.length === 0) {
      alert(" Aún no realizaste compras")
      return;
    }
    try{
      const orders = new Set(cart.map((product) => product.id));
      await getAllOrders(Array.from(orders), userData?.token!);
      alert("Su Compra ha sido exitosa");
      setCart([]);
      localStorage.setItem("cart", JSON.stringify("[]"));
    }catch (error){
        console.error("La compra no puedo realizarse", error)
    }
    }

  return (
    <div className="max-w-[60vw] m-auto">
      <div className="bg-white p-3 rounded-md shadow-md">
        {isEmpty ? (
          <p className="text-center text-2xl text-gray-700">
            Aún no realizaste ninguna compra
          </p>
        ) : (
          <>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2">Imagen</th>
                  <th className="py-2">Nombre</th>
                  <th className="py-2">Precio</th>
                  <th className="py-2">Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="py-2 px-4 text-center">
                      <Image
                        className="w-16 h-16 z-50"
                        src={item.image}
                        alt={item.image}
                        width={300}
                        height={150}
                      />
                    </td>
                    <td className="py-2 px-4 text-center">{item.name}</td>
                    <td className="py-2 px-4 text-center">${item.price}</td>
                    <td className="py-2 px-4 text-center flex justify-center">
                      <button
                        onClick={() => lessQuantity(item.id)}
                        type="button"
                        className="btn btn-dark mr-2 bg-gray-200 rounded-full w-5"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        onClick={() => moreQuantity(item.id)}
                        type="button"
                        className="btn btn-dark ml-2 bg-gray-200 rounded-full w-5"
                      >
                        +
                      </button>
                    </td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => removeCart(item.id)}
                        className="btn btn-danger bg-red-400 rounded-full"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-end text-2xl">
              Total pagar: <span className="fw-bold">${totalCart}</span>
            </p>
          </>
        )}

        <div className="flex flex-row justify-between w-auto">
          <button
            onClick={clearCart}
            className="btn btn-dark w-40 mt-3 p-2 bg-blue-500 rounded-2xl hover:bg-white disabled:hover:bg-gray-100 mx-4"
          >
            Vaciar Carrito
          </button>
          <button
            className="btn btn-dark w-40 mt-3 p-2 bg-blue-500 rounded-2xl hover:bg-white  mx-4"
            onClick={handleContinuar}
          >
            Comprar
          </button>
        </div>
        {/* <Link className="m-96 w-20 bg-blue-500 rounded-2xl" href="/login/dashBoard/listaProductos">Volver</Link> */}
      </div>
    </div>
  );
};

export default Compras;
