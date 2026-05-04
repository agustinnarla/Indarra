import { useRouter } from "expo-router";

export const useAuth = () => {
  const router = useRouter();

  const login = async () => {
    router.replace("/(tabs)");
  };

  return { login };
};
