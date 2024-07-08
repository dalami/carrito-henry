import { CardItem, Orders, UserData, UserLogin, UserSession } from "@/interface/CardData";


const apiUrl = process.env.NEXT_PUBLIC_API_URL



export const fetchDataP = async (): Promise<CardItem[]> => {
  try {
    const products = await fetch(`${apiUrl}/products`, {
      next: { revalidate: 3600 },
    });
    if (!products.ok) {
      throw new Error("Error en el registro");
    }
    const res = await products.json();
    return res;
  } catch (error) {
    throw error;
  }
};

export const fetchRegister = async (UserData: UserData) => {
  try {
    const register = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserData),
    });

    if (!register.ok) {
      throw new Error("Error en el registro");
    }
    const response = await register.json();
    return response;
  } catch (error) {
    alert("Error de conexion");
    throw error;
  }
};

export const fetchLogin = async (UserLogin: UserLogin) => {
  try {
    const logueo = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserLogin),
    });

    const logueoOk = await logueo.json();
    console.log("me loguee correctamente", logueoOk);

    return logueoOk;
  } catch (error) {
    alert("Error de conexion");
    throw error;
  }
};


export const getAllOrders = async (products: number[] ,token: string ): Promise<Orders[]> => {
  try {
    const response = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token,
      },
      body: JSON.stringify({ products })
    });

    
    const data: Orders[] = await response.json();
    console.log("Soy la data",data);
    
    return data;
  } catch (error) {
    console.error("Error al obtener todas las órdenes:", error);
    throw error;
  }
};

export const getUserOrders = async (token: string ) => {
  try {
    const response = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
       
        "Authorization": token,
      },
     
    });
const data = await response.json();
    console.log("Soy la data",data);
     return data;
  } catch (error) {
    console.error("Error al obtener todas las órdenes del usuario:", error);
    throw error;
  }
};
