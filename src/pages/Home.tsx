import React from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import Card from "../components/ux/Card";
import { useAuth } from "../hooks/useAuth";
import { useHome } from "../hooks/useHome";

export const Home = () => {
  const { user } = useAuth();

  const { loading, error, plan } = useHome();
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        plan?.map((item) => (
          <View key={item.id}>
            <Card day={item.dia} detail={item.detalle} />
          </View>
        ))
      )}

      {error && <Text>{error}</Text>}
    </View>
  );
};
