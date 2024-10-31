import { Colors } from "@/constants/Colors";
import { useState } from "react";
import {
  StyleSheet,
  TextInput as TextInputComponent,
  View,
} from "react-native";

export const TextInput = ({ height = 54 }: { height?: number }) => {
  const [text, onChangeText] = useState("");

  const dynamicStyle = StyleSheet.flatten([styles.input, { height }]);

  return (
    <TextInputComponent
      style={dynamicStyle}
      onChangeText={onChangeText}
      value={text}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={Colors.dark.base.gray300}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 54,
    borderRadius: 6,
    backgroundColor: Colors.dark.base.gray500,
    borderColor: Colors.dark.base.gray700,
    padding: 16,
    color: Colors.dark.base.gray100,
    borderLeftColor: Colors.dark.product.blue,
    borderTopColor: Colors.dark.product.blue,
    borderRightColor: Colors.dark.product.blue,
    borderBottomColor: Colors.dark.product.blue,
  },
});
