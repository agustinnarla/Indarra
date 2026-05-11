import { router, useLocalSearchParams } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from "react-native";
import CustomHeader from "../components/ux/CustomHeader";
import { useRutina } from "../hooks/useRutina";
import { colors } from "../themes/colors";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

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
  const { loading, error, rutina, updateEjercicio } = useRutina();

  const [peso, setPeso] = useState<string>("");

  const handlePress = useCallback((ejercicio: Ejercicio) => {
    setIsSelected(ejercicio);
    setPeso(ejercicio.peso);
    bottomSheetRef.current?.present();
  }, []);

  const handleBack = () => {
    router.replace("/(tabs)");
  };

  const handleUpdate = async () => {
    if (isSelected) {
      await updateEjercicio(Number(idPlan), isSelected.id_ejercicio, peso);
      bottomSheetRef.current?.dismiss();
    }
  };

  return (
    <View style={styles.screen}>
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
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.listWrapper}
        showsVerticalScrollIndicator={false}
      >
        {rutina &&
          Object.entries(rutina.ejercicios).map(([tipo, ejercicios]) => (
            <View key={tipo} style={styles.container}>
              <Text style={styles.title}>{tipo.toLocaleUpperCase()}</Text>
              {ejercicios.map((item) => (
                <TouchableOpacity
                  key={String(item.id_ejercicio)}
                  style={styles.card}
                  activeOpacity={0.7}
                  onPress={() => handlePress(item)}
                >
                  <View style={styles.cardLeft}>
                    <View style={styles.cardInfo}>
                      <Text style={styles.labelPrimary} numberOfLines={1}>
                        {item.detalle.toLocaleUpperCase()}
                      </Text>
                      <View style={styles.badgeRow}>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>
                            {item.series} series
                          </Text>
                        </View>
                        <View style={styles.badge}>
                          <Text style={styles.badgeText}>{item.rep} reps</Text>
                        </View>
                        <View style={[styles.badge, styles.badgePeso]}>
                          <Text
                            style={[styles.badgeText, styles.badgePesoText]}
                          >
                            {item.peso} kg
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={20}
                    color={colors.hover}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ))}
      </ScrollView>
      <BottomSheetModal
        ref={bottomSheetRef}
        enableDynamicSizing
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={{
          backgroundColor: colors.primary,
        }}
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
                value={peso}
                onChangeText={setPeso}
                maxLength={4}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.updateButton}
              activeOpacity={0.7}
              onPress={() => handleUpdate()}
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F2F4F6",
  },
  scroll: {
    flex: 1,
  },
  listWrapper: {
    padding: 16,
    gap: 8,
    paddingBottom: 40,
  },
  container: {
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "NunitoBold",
    fontSize: 11,
    color: colors.hover,
    letterSpacing: 1.2,
    marginBottom: 2,
    marginLeft: 4,
  },
  // Card
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#1A2D42",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 12,
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInfo: {
    flex: 1,
    gap: 5,
  },
  labelPrimary: {
    fontFamily: "NunitoBold",
    fontSize: 13,
    color: colors.primary,
  },
  badgeRow: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
  },
  badge: {
    backgroundColor: colors.labelDetail,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  badgePeso: {
    backgroundColor: colors.secondary,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: "NunitoSemiBold",
    color: colors.secondary,
  },
  badgePesoText: {
    color: "white",
  },
  label: {
    fontFamily: "NunitoRegular",
    textAlign: "center",
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
  sheetBackground: { backgroundColor: colors.hover, borderRadius: 28 },

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

  closeButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    fontFamily: "NunitoBold",
  },
  updateButtonText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontFamily: "NunitoBold",
  },
});
