import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../themes/colors";
import { useState } from "react";

export const Login = () => {
  const [isFocus, setFocus] = useState(false);
  const [isFocusPassword, setFocusPassword] = useState(false);

  const { login } = useAuth();
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/gymlogo.png")}
        style={styles.logo}
      />
      <View style={styles.containerForm}>
        <Text style={styles.name}>Login</Text>
        <View style={styles.detail} />
        <View style={styles.form}>
          <Text style={[styles.label, isFocus && styles.focusedLabel]}>
            Dni
          </Text>
          <TextInput
            placeholder="DNI"
            style={[styles.input, isFocus && styles.focused]}
            value={dni}
            onChangeText={setDni}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <Text style={[styles.label, isFocusPassword && styles.focusedLabel]}>
            Contraseña
          </Text>
          <TextInput
            placeholder="***********"
            style={[styles.input, isFocusPassword && styles.focused]}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusPassword(true)}
            onBlur={() => setFocusPassword(false)}
          />
          <View />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => login(dni, password)}
          >
            <Text style={styles.titleButton}>Ingresar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.primary,
  },

  subtitle: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "NunitoSemiBold",
    color: "white",
  },
  name: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontFamily: "NunitoBold",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopRightRadius: 80,

    elevation: 5,
  },
  detail: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    marginVertical: 20,
    gap: 10,
  },
  label: {
    fontFamily: "NunitoBold",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,
    elevation: 5,
    shadowColor: "#1A2D42",
  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    elevation: 5,
  },
  titleButton: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontFamily: "NunitoBold",
  },
  logo: {
    marginTop: 80,
    width: 150,
    height: 150,
    marginBottom: 80,
  },
  focused: {
    transform: [{ scale: 1.05 }],
    borderColor: colors.primary,
    borderWidth: 1,
  },
  focusedLabel: {
    color: colors.primary,
  },
});
