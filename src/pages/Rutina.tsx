import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/ux/CustomHeader";
import { useRutina } from "../hooks/useRutina";

export const Rutina = () => {
  const { idPlan } = useLocalSearchParams<{ idPlan: string }>();
  const handleBack = () => {
    router.replace("/(tabs)");
  };
  const { loading, error, rutina } = useRutina();
  const handleRutina = () => {
    console.log(rutina?.ejercicios);
  };
  return (
    <View>
      <CustomHeader backButton={handleBack} title={`Rutina ${idPlan}`} />

      <View>
        {rutina?.ejercicios.map((ejercicio) => {
          return (
            <View key={ejercicio.id}>
              <Text>{ejercicio.series}</Text>
              <Text>{ejercicio.rep}</Text>
              <Text>{ejercicio.detalle}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};
