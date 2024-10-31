import { StyleSheet, View } from "react-native";
import { TextInput } from "../atoms/textInput";

const DEFAULT_HEIGHT = 54;

export const SearchContainer = () => {
  return (
    <View style={styles.container}>
      <TextInput height={DEFAULT_HEIGHT} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: (DEFAULT_HEIGHT / 2) * -1,
  },
});
