import { useAuth } from "@/contexto/AuthProvider";
import { CardItem } from "@/interface/CardData";
import { useEffect, useMemo, useState } from "react";

const UseCart = () => {
  const { userData, cart, setCart } = useAuth();

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    if (typeof window !== "undefined" && userData) {
      const localStorageCart = localStorage.getItem(`cart_${userData.user.id}`);
      if (localStorageCart) {
        setCart(JSON.parse(localStorageCart));
      }else {
        setCart([]);
      }
    }
  }, [userData, setCart]);

  useEffect(() => {
    if (typeof window !== "undefined" && userData) {
      localStorage.setItem(`cart_${userData.user.id}`, JSON.stringify(cart));
    }
  }, [cart, userData]);

  function addToCart(data: CardItem) {
    if(!userData){
      alert("Debe estar registrado")
      return
    }

    const itemExists = cart.findIndex((cartItem) => cartItem.id === data.id);
    if (itemExists >= 0) {
      const newItem = [...cart];
      newItem[itemExists].quantity++;
      setCart(newItem);

    } else {
      data.quantity = 1;
      setCart([...cart, data]);
    }
  }

  function removeCart(id: number) {
    setCart((prevCart) => prevCart.filter((cardItem) => cardItem.id !== id));
  }

  function lessQuantity(id: number) {
    const updateQuantity = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateQuantity);
  }

  function moreQuantity(id: number) {
    const updateCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateCart);
  }

  function clearCart() {
    setCart([]);
  }
 const isEmpty = useMemo(() => cart.length === 0, [cart]);
 
  const totalCart = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

 
  return {
    cart,
    setCart,
    addToCart,
    removeCart,
    lessQuantity,
    moreQuantity,
    clearCart,
    isEmpty,
    totalCart,
  };
};

export default UseCart;
