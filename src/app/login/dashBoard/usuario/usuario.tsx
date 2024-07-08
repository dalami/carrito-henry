"use client";

import { getUserOrders } from "@/app/fetching/fetch";
import { useAuth } from "@/contexto/AuthProvider";
import { Orders } from "@/interface/CardData";
import { useEffect, useState } from "react";

const Usuario: React.FC = () => {
  const { userData } = useAuth();
  const [ordenes, setOrdenes] = useState<Orders[]>([]);

  const fetchUsers = async () => {
    const ordersR = await getUserOrders(userData?.token!);
    console.log("soy order R", ordersR);

    setOrdenes(ordersR);
  };

  useEffect(() => {
    userData?.token && fetchUsers();
  }, [userData?.token!]);

  return (
    <div className="max-w-[50vw] m-auto text-center mt-20">
      {userData ? (
        <>
          <h2 className="text-2xl m-4 underline">Datos del usuario</h2>
          <p className="text-2xl m-4">{userData.user.name}</p>
          <p className="text-2xl m-4">{userData.user.email}</p>
          <p className="text-2xl m-4">{userData.user.address}</p>
          <p className="text-2xl m-4">{userData.user.phone}</p>
          <h2 className="text-2xl underline">Productos comprados</h2>
          <div className="flex flex-col gap-4">
            {ordenes?.length > 0 ? (
              ordenes.map((orden) => {
                return (
                  <div key={orden.id}>
                    <div>
                      <p className="m-2">Status:  {orden.status}</p>
                      <p>Fecha:  {orden.date}</p>
                      <div>
                        <ul>
                          {orden.products.map((prod) => (
                            <li key={prod.id} className=" border p-2 mb-2">
                              <p >Nombre: {prod.name}</p>
                              <p>Precio: ${prod.price}</p>
                              <img
                                className="items-center"
                                src={prod.image}
                                alt={prod.name}
                                width={100}
                                height={100}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <p>Usted no tiene ninguna orden</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <p>Los datos del usuario no están disponibles</p>
      )}
    </div>
  );
};

export default Usuario;
