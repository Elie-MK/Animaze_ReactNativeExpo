import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_900Black } from "@expo-google-fonts/poppins";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_900Black,
  });

  return {
    fontsLoaded,
    fontPoppins: {
      regular: "Poppins_400Regular",
      bold:"Poppins_700Bold",
      black: "Poppins_900Black"
    },
  };
};
