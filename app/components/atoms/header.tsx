import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark.base.gray700,
    height: 173,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 132,
    objectFit: "contain",
  },
});
