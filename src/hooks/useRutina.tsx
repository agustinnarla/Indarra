import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";

interface Rutina {
  message: string;
  ejercicios: any[];
}
export const useRutina = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [rutina, setRutina] = React.useState<Rutina | null>(null);

  const { idPlan } = useLocalSearchParams<{ idPlan: string }>();

  const getRutina = async () => {
    try {
      setLoading(true);
      setError(null);
      if (!idPlan) return console.log("isPlan required");

      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API}/api/v1/get/plan/${idPlan}/ejercicios`,
      );

      const data = await response.json();
      console.log(data);
      setRutina(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRutina();
  }, [idPlan]);

  return { loading, error, rutina, getRutina };
};
