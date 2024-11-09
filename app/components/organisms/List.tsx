import { FlatList, StyleSheet, View } from "react-native";
import { StatusRow } from "../molecules/StatusRow";
import { Empty } from "../atoms/Empty";
import { Colors } from "@/app/constants/Colors";
import { TaskCard } from "../molecules/TaskCard";
import { useToDoHook } from "@/app/hooks/useToDoHook";

export const List = () => {
  const { toDoItems } = useToDoHook();
  return (
    <View style={styles.container}>
      <StatusRow
        createdLenght={toDoItems.length}
        doneLenght={toDoItems.filter((item) => item.done).length}
      />
      {toDoItems.length > 0 ? (
        <FlatList
          data={toDoItems}
          renderItem={({ item }) => <TaskCard item={item} />}
        />
      ) : (
        <Empty />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    marginHorizontal: 24,
    gap: 20,
    flex: 1,
  },
  taskCard: {
    width: "auto",
    padding: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.base.gray500,
    borderColor: Colors.dark.base.gray400,
    borderRadius: 8,
    gap: 8,
    flexDirection: "row",
  },
  taskText: {
    fontSize: 14,
    color: Colors.dark.base.gray100,
    fontWeight: 400,
  },
});
