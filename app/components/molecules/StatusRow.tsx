import { StyleSheet, Text, View } from "react-native";
import { StatusText } from "../atoms/StatusText";

export const StatusRow = () => {
  return (
    <View style={styles.container}>
      <StatusText text="Criadas" count={"0"} />
      <StatusText text="Concluídas" count={"0"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
