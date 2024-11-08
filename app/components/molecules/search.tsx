import { StyleSheet, View } from "react-native";
import { TextInput } from "../atoms/TextInput";
import { IconButton } from "../atoms/IconButton";
import { useToDoHook } from "@/app/hooks/useToDoHook";
import { useState } from "react";
import { ToDoItem } from "@/app/@types/ToDo";
import { ItemModel } from "@/app/models/Item";

const DEFAULT_HEIGHT = 54;

export const SearchContainer = () => {
  const [text, onChangeText] = useState("");
  const { add } = useToDoHook();

  const handleAddItem = () => {
    if (!!text.trim()) {
      const data = {
        createdAt: new Date(),
        text,
        done: false,
      } as ToDoItem;
      const itemModel = ItemModel.create(data);
      add(itemModel);
      onChangeText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput height={DEFAULT_HEIGHT} value={text} onChange={onChangeText} />
      <IconButton
        name="pluscircleo"
        height={DEFAULT_HEIGHT}
        onPress={handleAddItem}
      />
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
