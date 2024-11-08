import { Colors } from "@/constants/Colors";
import { StyleSheet, TextInput as TextInputComponent } from "react-native";

type TextInputProps = {
  height?: number;
  value: string;
  onChange: (text: string) => void;
};

export const TextInput = ({ height = 54, value, onChange }: TextInputProps) => {
  const dynamicStyle = StyleSheet.flatten([styles.input, { height }]);

  return (
    <TextInputComponent
      style={dynamicStyle}
      onChangeText={onChange}
      value={value}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={Colors.dark.base.gray300}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
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
    fontSize: 16,
  },
});
