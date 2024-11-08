import { StyleSheet, Text, View } from "react-native";
import { StatusRow } from "../molecules/StatusRow";

export const List = () => {
  return (
    <View style={styles.container}>
      <StatusRow />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    marginBottom: 20,
    marginHorizontal: 24,
  },
});
