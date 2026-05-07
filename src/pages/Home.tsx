import React from "react";
import { View, Pressable, Text } from "react-native";
import Card from "../components/ux/Card";
import { useAuth } from "../hooks/useAuth";

export const Home = () => {
  const { user } = useAuth();
  const handleUser = () => {
    console.log(user);
  };
  return (
    <View>
      <Pressable onPress={handleUser}>
        <Text>Holasdklasd</Text>
      </Pressable>
      <Card day="Dia 1" detail="Full-Body" />
    </View>
  );
};
