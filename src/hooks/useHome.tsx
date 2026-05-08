import React, { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

interface Plan {
  id: number;
  id_usuario: number;
  dia: string;
  detalle: string;
}
export const useHome = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [plan, setPlan] = useState<Plan[]>([]);
  const { user } = useAuth();

  const getPlan = async () => {
    try {
      if (!user?.id) return;

      setLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API}/api/v1/get/plan/${user?.id}`,
      );

      if (!response) {
        throw new Error("Error al obtener los planes");
      }

      const data = await response.json();
      setPlan(data.planes);
      return data;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPlan();
  }, [user]);

  return { getPlan, loading, error, plan };
};
