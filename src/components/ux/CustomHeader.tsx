import { colors } from "@/src/themes/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  title?: string;
  subtitle?: string;
}
const CustomHeader = ({ title, subtitle }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.image}>
        <Ionicons name="pulse" size={24} color={colors.primary} />
      </View>
      <Text style={styles.subtitle}>{title?.toLocaleUpperCase()}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.labelDetail,
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "NunitoSemiBold",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "NunitoSemiBold",
  },
  image: {
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
export default CustomHeader;
