import { Profile } from "@/src/pages/Profile";
import React from "react";
import { View } from "react-native";

export default function ProfileTab() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Profile />
    </View>
  );
}
