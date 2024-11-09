import { StyleSheet, Text, View } from "react-native";
import { StatusText } from "../atoms/StatusText";

type StatusRow = {
  createdLenght?: number;
  doneLenght?: number;
};
export const StatusRow = ({ createdLenght = 0, doneLenght = 0 }: StatusRow) => {
  return (
    <View style={styles.container}>
      <StatusText text="Criadas" count={String(createdLenght)} />
      <StatusText text="Concluídas" count={String(doneLenght)} />
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
