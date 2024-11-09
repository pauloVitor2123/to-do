import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesignIcons from "@expo/vector-icons/AntDesign";
import { Colors } from "@/app/constants/Colors";
import { ComponentProps } from "react";

type AntDesignIconName = ComponentProps<typeof AntDesignIcons>["name"];
type IconButtonProps = {
  name: AntDesignIconName;
  size?: number;
  height?: number;
  onPress?: () => void;
};

export const IconButton = (props: IconButtonProps) => {
  const { name, size = 18, height = 54, onPress } = props;
  const dynamicStyle = StyleSheet.flatten([styles.container, { height }]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={dynamicStyle}>
        <AntDesignIcons
          name={name}
          color={Colors.dark.base.gray100}
          size={size}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.dark.product.blueDark,
    width: 52,
    height: 52,
    borderRadius: 6,
  },
});
