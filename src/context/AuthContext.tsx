import React, { createContext, useContext } from "react";
import { User } from "../data/data";

//Defino lo que va a estar disponible en toda la aplicación

export interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
  user: User | null;
  login: (dni: string, password: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
