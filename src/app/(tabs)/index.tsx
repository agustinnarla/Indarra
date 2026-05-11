import CustomHeader from "@/src/components/ux/CustomHeader";
import { Home } from "@/src/pages/Home";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Home />
    </View>
  );
}
