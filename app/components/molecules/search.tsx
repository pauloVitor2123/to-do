import { StyleSheet, View } from "react-native";
import { TextInput } from "../atoms/TextInput";
import { IconButton } from "../atoms/IconButton";

const DEFAULT_HEIGHT = 54;

export const SearchContainer = () => {
  return (
    <View style={styles.container}>
      <TextInput height={DEFAULT_HEIGHT} />
      <IconButton name="pluscircleo" height={DEFAULT_HEIGHT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: (DEFAULT_HEIGHT / 2) * -1,
    display: "flex",
    flexDirection: "row",
    gap: 4,
    justifyContent: "space-between",
  },
});
