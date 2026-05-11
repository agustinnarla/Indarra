import React from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import Card from "../components/ux/Card";
import { useAuth } from "../hooks/useAuth";
import { useHome } from "../hooks/useHome";
import CustomHeader from "../components/ux/CustomHeader";

export const Home = () => {
  const { loading, error, plan } = useHome();
  return (
    <View>
      <CustomHeader user={true} ubication="Bucor Nv.Cordoba" />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        plan?.map((item) => (
          <View key={item.id}>
            <Card day={item.dia} detail={item.detalle} idPlan={item.id} />
          </View>
        ))
      )}

      {error && <Text>{error}</Text>}
    </View>
  );
};
