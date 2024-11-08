import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";

type StatusTextProps = {
  text: string;
  count?: string;
};

export const StatusText = (props: StatusTextProps) => {
  const { text, count } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {count && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{String(count)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  badgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: Colors.dark.base.gray400,
  },
  badgeText: {
    color: Colors.dark.base.gray200,
    fontSize: 12,
    fontWeight: "700",
  },
  text: {
    color: Colors.dark.product.secondaryBlue,
    fontWeight: "700",
    fontSize: 14,
  },
});
