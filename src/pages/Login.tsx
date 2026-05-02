import { StyleSheet, Text, View } from "react-native";
import { color } from "../themes/colors";

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: color.background,
  },
});
