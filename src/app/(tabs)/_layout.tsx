import { colors } from "@/src/themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: colors.primary,
          backgroundColor: colors.labelDetail,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
