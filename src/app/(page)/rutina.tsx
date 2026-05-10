import { colors } from "@/src/themes/colors";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/src/components/ux/CustomHeader";
import { router, useLocalSearchParams } from "expo-router";
import { Rutina } from "@/src/pages/Rutina";

export default function LoginTab() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: colors.primary }}
      />

      <View style={{ flex: 1 }}>
        <Rutina />
      </View>

      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "white" }} />
    </View>
  );
}
