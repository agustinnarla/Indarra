import { colors } from "@/src/themes/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  day: string;
  detail: string;
}
const Card = ({ day, detail }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.card}>
        <View style={styles.cardDay}>
          <Text style={styles.day}>{day.toLocaleUpperCase()}</Text>
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
});
export default Card;
