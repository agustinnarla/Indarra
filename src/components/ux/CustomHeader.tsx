import { colors } from "@/src/themes/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  ubication?: string;
  user?: boolean;
  backButton?: () => void;
  title?: string;
}
const CustomHeader = ({ user, ubication, backButton, title }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {backButton && (
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={backButton}
            style={styles.backButton}
          />
        )}
        <View style={styles.left}>
          <View style={styles.ubi}>
            {ubication && <EvilIcons name="location" size={20} color="white" />}
            {ubication && <Text style={styles.titleUbi}>{ubication}</Text>}
          </View>
        </View>
        {user && (
          <Ionicons
            name="person-outline"
            size={22}
            color="white"
            style={styles.icon}
          />
        )}
        {title && <Text style={styles.title}>{title}</Text>}
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
  backButton: {
    position: "absolute",
    left: 16,
  },
});
export default CustomHeader;
