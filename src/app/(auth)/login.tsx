import Login from "@/src/pages/Login";
import { colors } from "@/src/themes/colors";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginTab() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        edges={["top"]}
        style={{ backgroundColor: colors.primary }}
      />

      <View style={{ flex: 1 }}>
        <Login />
      </View>

      <SafeAreaView edges={["bottom"]} style={{ backgroundColor: "white" }} />
    </View>
  );
}
