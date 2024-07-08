/* eslint-disable @next/next/no-img-element */

import { CardItem } from "@/interface/CardData";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
  card: CardItem;
  addToCart: () => void;
}

const Card: React.FC<CardProps> = ({ card, addToCart }) => {
  const [detail, setDetail] = useState(false);

  const abrir = () => {
    setDetail(true);
  };

  const cerrar = () => {
    setDetail(false);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-80 h-auto overflow-hidden shadow-lg bg-stone-100 rounded-lg m-0">
          <div className="px-5 py-3 text-center">
            <div className="mb-2 text-2xl">{card.name}</div>
            <p className="text-gray-700 text-base mb-2">${card.price}</p>
            <Image
              src={card.image}
              alt={card.name}
              width={200}
              height={160}
              className="text-gray-700 text-base mb-2 rounded-lg center"
            />
            {/* <p className="text-center justify-center w-72">{card.description}</p> */}
            <button
              onClick={addToCart}
              type="button"
              className="p-2 m-2 bg-blue-500 text-white rounded-md cursor-pointer"
            >
              Agregar al carrito
            </button>
            <button
              onClick={abrir}
              type="button"
              className="p-2 m-2 bg-green-500 text-white rounded-md cursor-pointer"
            >
              Detalle
            </button>
          </div>
        </div>
      </div>

      {detail && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 ">
          <div className="bg-white p-5 rounded-lg shadow-lg w-96 max-h-full overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{card.name}</h2>
              <button onClick={cerrar} className="text-gray-500 hover:text-gray-800">
                &times;
              </button>
            </div>
            <Image
              src={card.image}
              alt={card.name}
              width={400}
              height={320}
              className="rounded-lg mb-4"
             
            />
            <p className="text-gray-700 mb-4">{card.description}</p>
            <p className="text-gray-700 font-bold mb-4">Precio: ${card.price}</p>
            <button
              onClick={() => {
                addToCart();
                cerrar();
              }}
              type="button"
              className="p-2 bg-blue-500 text-white rounded-md cursor-pointer w-full"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
