import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../hooks/useAuth";
import { colors } from "../themes/colors";

export const Login = () => {
  const { login } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listo para entrenar</Text>
      <Text style={styles.subtitle}>Login</Text>
      <View style={styles.containerForm}>
        <View style={styles.form}>
          <Text style={styles.name}>INDARRA</Text>
          <View style={styles.detail} />
          <Text style={styles.label}>Dni</Text>
          <TextInput placeholder="DNI" style={styles.input} />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            placeholder="***********"
            style={styles.input}
            secureTextEntry
          />
          <View />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={login}
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
    backgroundColor: colors.background,
  },
  title: {
    marginTop: 80,
    fontSize: 30,
    fontFamily: "NunitoRegular",
  },
  subtitle: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "NunitoSemiBold",
    marginBottom: 80,
  },
  name: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    fontFamily: "NunitoBold",
  },
  containerForm: {
    flex: 1,
    backgroundColor: colors.hover,
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 5,
  },
  detail: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 1,
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
    fontSize: 16,
    fontFamily: "NunitoSemiBold",
  },
  input: {
    borderRadius: 10,
    backgroundColor: colors.background,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,
    elevation: 5,
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
    color: colors.labelDetail,
    fontFamily: "NunitoBold",
  },
});
