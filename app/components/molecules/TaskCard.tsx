import { ToDoItem } from "@/app/@types/ToDo";
import { Text, View, StyleSheet } from "react-native";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import { Colors } from "@/constants/Colors";
import { RadioButton } from "../atoms/RadioButton";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useToDoHook } from "@/app/hooks/useToDoHook";

export const TaskCard = ({ item }: { item: ToDoItem }) => {
  const { remove, update } = useToDoHook();
  const [checked, toggleChecked] = useState(false);
  const handleToggleChecked = () => {
    const newItem = { ...item };
    newItem.done = !checked;
    toggleChecked(!checked);
    update(newItem);
  };

  const dynamicTextStyle = checked
    ? StyleSheet.flatten([styles.taskText, styles.textLineTrough])
    : styles.taskText;

  return (
    <View key={item.createdAt.toString()} style={styles.taskCard}>
      <RadioButton checked={checked} onPress={handleToggleChecked} />
      <Text style={dynamicTextStyle}>{item.text}</Text>
      <TouchableOpacity
        onPress={() => remove(item)}
        style={{ cursor: "pointer" }}
      >
        <AntDesignIcons name="delete" color={"red"} size={17} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskCard: {
    width: "auto",
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.base.gray500,
    borderColor: Colors.dark.base.gray400,
    borderRadius: 8,
    gap: 8,
    marginBottom: 8,
    flexDirection: "row",
  },
  taskText: {
    fontSize: 14,
    color: Colors.dark.base.gray100,
    fontWeight: 400,
    width: "100%",
  },
  textLineTrough: {
    textDecorationLine: "line-through",
  },
});
