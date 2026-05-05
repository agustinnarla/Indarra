import { colors } from "@/src/themes/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
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
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.ubi}>
            <EvilIcons name="location" size={20} color="white" />
            <Text style={styles.titleUbi}>Bucor Nv. Cordoba</Text>
          </View>
        </View>

        <Ionicons
          name="person-outline"
          size={22}
          color="white"
          style={styles.icon}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flex: 1,
    gap: 4,
  },
  ubi: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  titleUbi: {
    color: "white",
    fontSize: 13,
    opacity: 0.9,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "NunitoSemiBold",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    fontFamily: "NunitoRegular",
    opacity: 0.9,
  },
  icon: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "white",
    padding: 10,
  },
});
export default CustomHeader;
