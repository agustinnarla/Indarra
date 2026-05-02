import Login from "@/src/pages/Login";
import { color } from "@/src/themes/colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginTab() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: color.background }}
      edges={["top", "left", "right"]}
    >
      <Login />
    </SafeAreaView>
  );
}
