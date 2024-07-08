export interface UserLogin {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export interface CardData {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

export interface CardItem extends CardData {
  quantity: number;
}

export interface ValidateErrorsProps {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  password?: string;
}

export interface ValidLogErrorsProps {
  email?: string;
  password?: string;
}

export interface Orders {
  id:number,
  status: string;
  date: string;
  user: string,
 products: CardItem[]
  
 }
  


export interface UserSession {
  token: string;
  user: {
    address: string;
    email: string;
    id: number;
    name: string;
    phone: string;
    orders: [];
    role: string;
  };
}

export interface AuthContextProps {
  userData: UserSession | null;
  setUserData: React.Dispatch<React.SetStateAction<UserSession | null>>;
  cart: CardItem[];
  setCart: React.Dispatch<React.SetStateAction<CardItem[]>>;
}
