import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import Toast from "react-native-toast-message";

interface Ejercicio {
  id_plan: number;
  id_ejercicio: number;
  detalle: string;
  id_tipo_ejercicio: number;
  tipo_ejercicio: string;
  series: string;
  rep: string;
  peso: string;
}

interface Rutina {
  message: string;
  ejercicios: {
    [key: string]: Ejercicio[];
  };
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

  const updateEjercicio = async (
    id_plan: number,
    id_ejercicio: number,
    peso: string,
  ) => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_API}/api/v1/update/exercise/${id_ejercicio}/${id_plan}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ peso }),
        },
      );

      if (!response.ok) {
        throw new Error("Error al actualizar ejercicio");
      }
      Toast.show({
        type: "success",
        text1: "Actualización exitosa",
      });
      await getRutina();
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Error al actualizar ejercicio",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getRutina();
  }, [idPlan]);

  return { loading, error, rutina, getRutina, updateEjercicio };
};
