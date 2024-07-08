"use client";
import { AuthContextProps, UserSession, CardItem } from '@/interface/CardData';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthProviderProps {
  children: React.ReactElement;
}

const AuthContext = createContext<AuthContextProps>({
  userData: null,
  setUserData: () => {},
  cart: [],
  setCart: () => {}
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserSession | null>(null);
  const [cart, setCart] = useState<CardItem[]>([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem('UserSession');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
      const localStorageCart = localStorage.getItem(`cart_${parsedUserData.user.id}`);
      if (localStorageCart) {
        setCart(JSON.parse(localStorageCart));
      }
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('UserSession', JSON.stringify(userData));
      const localStorageCart = localStorage.getItem(`cart_${userData.user.id}`);
      if (localStorageCart) {
        setCart(JSON.parse(localStorageCart));
      } else {
        setCart([]); 
      }
    }
  }, [userData]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem(`cart_${userData.user.id}`, JSON.stringify(cart));
    }
  }, [cart, userData]);

  return (
    <AuthContext.Provider value={{ userData, setUserData, cart, setCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
