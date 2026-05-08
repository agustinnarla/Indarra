import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../themes/colors";
import { User } from "../data/data";
export const Profile = () => {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContent}>
          <View style={styles.containerIcon}>
            <Ionicons name="person-outline" size={28} color="white" />
          </View>
          <Text style={styles.name}>Agustin Arla</Text>
          <Text style={styles.member}>Socio activo</Text>
        </View>
      </SafeAreaView>
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={styles.itemRow}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>arlaagustin1@gmail.com</Text>
          </View>
          <Divider />
          <View style={styles.itemRow}>
            <Text style={styles.label}>Telefono</Text>
            <Text style={styles.value}>3518006018</Text>
          </View>
          <Divider />
          <View style={styles.itemRow}>
            <Text style={styles.label}>Sede</Text>
            <Text style={styles.value}>Bucor Nv.Cordoba</Text>
          </View>
          <Divider />
          <View style={styles.itemRow}>
            <Text style={styles.label}>Fecha Vencimiento</Text>
            <Text style={styles.value}>20/06/04</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Divider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArea: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    alignItems: "center",
    gap: 8,
  },
  containerIcon: {
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  name: {
    fontFamily: "NunitoBold",
    color: "white",
    fontSize: 20,
  },
  member: {
    fontFamily: "NunitoRegular",
    color: "#D4D8DD",
    fontSize: 13,
  },
  body: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
    elevation: 3,
    shadowColor: "#1A2D42",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
  },
  itemRow: {
    paddingVertical: 12,
    gap: 3,
  },
  label: {
    fontFamily: "NunitoBold",
    color: colors.secondary,
    fontSize: 13,
  },
  value: {
    fontFamily: "NunitoRegular",
    color: colors.primary,
    fontSize: 15,
  },
  divider: {
    height: 1,
    backgroundColor: "#EEF1F4",
  },
});
