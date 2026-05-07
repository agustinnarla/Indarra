import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import * as SecureStore from "expo-secure-store";

import { User } from "../data/data";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await SecureStore.getItemAsync("token");

      if (storedToken) {
        setToken(storedToken);

        setIsAuthenticated(true);
      }
    };

    loadToken();
  }, []);

  const login = async (dni: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API}/api/v1/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ dni, password }),
        },
      );
      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);

        await SecureStore.setItemAsync("token", data.token);
        setToken(data.token);
        setUser(data.user);
        router.replace("/(tabs)");
        Toast.show({
          type: "success",
          text1: "Sesión iniciada",
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error al inicar sesión",
          text2: data.message,
        });
        setError(data.message);
      }
      setLoading(true);
    } catch (error) {
      console.log("error al iniciar sesión");
      setError(
        error instanceof Error ? error.message : "An uknown error ocurred",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, loading, error, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};
