import { colors } from "@/src/themes/colors";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  day: string;
  detail: string;
  idPlan: number;
}
const Card = ({ day, detail, idPlan }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    router.replace(`/(page)/rutina?idPlan=${idPlan}`);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.card, isPressed && styles.isPressed]}
        onPress={handlePress}
      >
        <View style={styles.cardDay}>
          <Text style={styles.day}>Día {day.toLocaleUpperCase()}</Text>
        </View>

        <Text style={styles.detail}>{detail.toLocaleUpperCase()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  card: {
    width: "80%",
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: colors.primary,
    borderWidth: 1.5,
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    elevation: 10,
    shadowColor: "#1A2D42",
    maxWidth: 360,
  },
  day: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontFamily: "NunitoBold",
  },
  detail: {
    fontSize: 16,
    fontFamily: "NunitoLight",
  },
  cardDay: {
    backgroundColor: colors.primary,
    padding: 5,
    borderRadius: 10,
    width: "30%",
  },
  isPressed: {
    transform: [{ scale: 0.9 }],
    elevation: 5,
  },
});
export default Card;
