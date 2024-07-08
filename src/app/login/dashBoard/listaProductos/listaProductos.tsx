"use client";
import Card from "@/components/cardProduct/Card";
import { CardItem } from "@/interface/CardData";
import { fetchDataP } from "@/app/fetching/fetch";
import { useEffect, useState } from "react";
import UseCart from "@/hooks/useCart";
import { useAuth } from "@/contexto/AuthProvider";

const Productos: React.FC = () => {
  const { addToCart, cart } = UseCart();
  const { userData, setUserData } = useAuth();
  const [fetchData, setFetchData] = useState<CardItem[]>([]);
  const [buscar, setBuscar] = useState("");
  const [productosFiltados, setProductosFiltrados] = useState(fetchData);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchDataP();
      setFetchData(data);
    };

    fetchProducts();
  }, []);

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filtrarValor = event.target.value.toLowerCase();
    setBuscar(filtrarValor);
    const filtrar = fetchData.filter((item) =>
      item.name.toLowerCase().includes(filtrarValor)
    );
    setProductosFiltrados(filtrar);
  };
  
  useEffect(() => {
    setProductosFiltrados(fetchData);
  }, [fetchData]);

  return (
    <div className="max-w-[70vw] m-auto">
      <div className="flex flex-wrap justify-center gap-16">
        <div className="flex flex-row  justify-between w-96 mt-12 m-10">
          <h1 className="text-3xl">Hola:</h1>
          <h3 className="text-2xl">{userData?.user.name}</h3>
        </div>
        <input
          type="search"
          name="buscar"
          className=" w-96 h-16 mt-8 p-2 border rounded-full border-gray-300  "
          placeholder="Search..."
          value={buscar}
          onChange={handleChangeFilter}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 justify-center mx-auto  max-w-[80vw] m-auto">
        {productosFiltados.map((item: CardItem) => {
          return (
            <Card key={item.id} 
            card={item} 
            addToCart={() => addToCart(item)} />
          );
        })}
      </div>
    </div>
  );
};
export default Productos;
