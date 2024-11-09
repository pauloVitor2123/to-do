import { Colors } from "@/constants/Colors";
import { Image, Text, View, StyleSheet } from "react-native";

export const Empty = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/clipboard.png")}
        style={styles.image}
      />
      <Text style={{ ...styles.text, ...styles.boldText }}>
        Você ainda não tem tarefas cadastradas,
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    paddingTop: 20,
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  boldText: {
    fontWeight: 700,
  },
  text: {
    fontWeight: 400,
    fontSize: 14,
    color: Colors.dark.base.gray300,
  },
  emptyBox: {
    paddingHorizontal: 20,
    paddingVertical: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
});
