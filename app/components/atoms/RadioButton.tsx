import { Colors } from "@/app/constants/Colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesignIcons from "@expo/vector-icons/AntDesign";

type RadioButtonProps = {
  checked: boolean;
  onPress: () => void;
};

export const RadioButton = ({ checked, onPress }: RadioButtonProps) => {
  if (checked) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0}>
        <View style={{ ...styles.container, ...styles.checked }}>
          <AntDesignIcons name="check" color={Colors.dark.base.gray100} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0}>
      <View style={styles.container} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderColor: Colors.dark.product.blue,
    padding: 4,
    borderWidth: 2,
  },
  checked: {
    backgroundColor: Colors.dark.product.blue,
  },
});
