import { colors } from "@/src/themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingHorizontal: 10,
          paddingVertical: 10,
          position: "absolute",
          marginHorizontal: 20,
          marginVertical: 20,
          elevation: 4,
          shadowColor: "#1A2D42",
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
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center", marginTop: 2 }}>
              <Text style={{ color, fontSize: 12 }}>Perfil</Text>
              {focused && (
                <View
                  style={{
                    marginTop: 3,
                    width: 18,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
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
          tabBarLabel: ({ focused, color }) => (
            <View style={{ alignItems: "center", marginTop: 2 }}>
              <Text style={{ color, fontSize: 12 }}>Perfil</Text>
              {focused && (
                <View
                  style={{
                    marginTop: 3,
                    width: 18,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: color,
                  }}
                />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
