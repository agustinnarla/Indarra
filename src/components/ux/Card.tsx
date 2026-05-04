import { colors } from "@/src/themes/colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  id: string;
  day: string;
  detail: string;
}
const Card = ({ day, detail, id }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.card} key={id}>
        <Text style={styles.day}>{day.toLocaleUpperCase()}</Text>
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
    height: "auto",
    borderRadius: 5,
    backgroundColor: "white",
    borderColor: colors.primary,
    borderWidth: 2,
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 5,
  },
  day: {
    fontSize: 16,
    fontFamily: "NunitoSemiBold",
  },
  detail: {
    fontSize: 14,
    fontFamily: "NunitoLight",
  },
});
export default Card;
