import CustomHeader from "@/src/components/ux/CustomHeader";
import { Home } from "@/src/pages/Home";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <CustomHeader title="Hora de entrenar" />
      <Home />
    </View>
  );
}
