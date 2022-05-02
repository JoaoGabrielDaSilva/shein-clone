import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import { ProductSize } from "../../models/Product";

type Props = ProductSize & {
  style?: StyleProp<ViewStyle>;
  selected?: boolean;
  onPress?: () => void;
};

export const SizeTag = ({
  number,
  ageRange,
  selected,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        { borderColor: selected ? "#000000" : "#CCCCCC" },
      ]}
    >
      <Text style={styles.text}>{`${number} (${ageRange})`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    borderWidth: 1,
    borderRadius: 12,
  },
  text: {},
});
