import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import CustomHeader from "../components/ux/CustomHeader";
import { useRutina } from "../hooks/useRutina";
import { colors } from "../themes/colors";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";

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

export const Rutina = () => {
  const { idPlan } = useLocalSearchParams<{ idPlan: string }>();
  const [isSelected, setIsSelected] = useState<Ejercicio | null>(null);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handlePress = useCallback((ejercicio: Ejercicio) => {
    setIsSelected(ejercicio);
    bottomSheetRef.current?.present();
  }, []);

  const handleBack = () => {
    router.replace("/(tabs)");
  };

  const { loading, error, rutina } = useRutina();

  return (
    <View>
      <CustomHeader backButton={handleBack} title={`Rutina ${idPlan}`} />
      {loading && (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {error && (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
      <View>
        {rutina &&
          Object.entries(rutina.ejercicios).map(([tipo, ejercicios]) => {
            return (
              <View key={tipo} style={styles.container}>
                <Text style={styles.title}>{tipo.toLocaleUpperCase()}</Text>
                <FlatList
                  data={ejercicios}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.items}
                      activeOpacity={0.7}
                      onPress={() => handlePress(ejercicios[0])}
                    >
                      <Text style={styles.labelPrimary}>
                        {item.detalle.toLocaleUpperCase()}
                      </Text>
                      <View style={{ flexDirection: "row", gap: 20 }}>
                        <Text style={styles.label}>Series: {item.series}</Text>
                        <Text style={styles.label}>Reps: {item.rep}</Text>
                        <Text style={styles.label}>Peso: {item.peso}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            );
          })}
        <BottomSheetModal
          ref={bottomSheetRef}
          enableDynamicSizing
          backgroundStyle={styles.sheetBackground}
        >
          <BottomSheetView style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>
              {isSelected?.detalle.toLocaleUpperCase()}
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{isSelected?.series}</Text>
                <Text style={styles.statLabel}>Series</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statBox}>
                <Text style={styles.statNumber}>{isSelected?.rep}</Text>
                <Text style={styles.statLabel}>Reps</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statBox}>
                <TextInput
                  style={styles.statNumber}
                  placeholder="0"
                  maxLength={4}
                />
              </View>
            </View>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.updateButton}
                activeOpacity={0.7}
                onPress={() => bottomSheetRef.current?.dismiss()}
              >
                <Text style={styles.updateButtonText}>Actualizar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                activeOpacity={0.7}
                onPress={() => bottomSheetRef.current?.dismiss()}
              >
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 10,
  },
  title: {
    fontFamily: "NunitoBold",
  },
  items: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    padding: 5,
    borderBottomColor: colors.primary,
  },
  labelPrimary: {
    fontFamily: "NunitoBold",
  },
  label: {
    fontFamily: "NunitoRegular",
  },
  errorText: {
    color: "red",
    fontFamily: "NunitoRegular",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sheetBackground: { backgroundColor: "white", borderRadius: 28 },

  sheetContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 8,
    gap: 20,
  },
  sheetTitle: {
    fontFamily: "NunitoBold",
    color: colors.primary,
    textAlign: "center",
  },
  sheetSubtitle: {
    fontSize: 14,
    fontFamily: "NunitoRegular",
    color: colors.hover,
    textAlign: "center",
    marginTop: -12,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  statBox: { alignItems: "center", flex: 1 },
  statNumber: { fontSize: 20, fontFamily: "NunitoBold", color: colors.primary },
  statLabel: {
    fontSize: 13,
    fontFamily: "NunitoRegular",
    marginTop: 4,
  },
  statDivider: {
    width: 1,
    height: 50,
    backgroundColor: colors.hover,
    opacity: 0.3,
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  updateButton: {
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    width: "80%",
    backgroundColor: colors.primary,

    paddingHorizontal: 10,
  },
  closeButton: {
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    width: "80%",
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  closeButtonText: { color: "black", fontSize: 16, fontFamily: "NunitoBold" },
  updateButtonText: { color: "white", fontSize: 16, fontFamily: "NunitoBold" },
});
