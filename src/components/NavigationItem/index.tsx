import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactChild, ReactElement, ReactNode } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Sizes = "default" | "medium";

type Props = {
  onPress?: () => void;
  text: string;
  extraRightText?: string;
  borderless?: boolean;
  size?: Sizes;
};

export const NavigationItem = ({
  text,
  extraRightText,
  borderless = false,
  onPress,
  size = "default",
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.container,
          { borderBottomColor: borderless ? "transparent" : "#E4E4E4" },
        ]}
      >
        <Text style={[sizes[size]]}>{text}</Text>

        <View style={styles.rightSide}>
          <Text style={styles.extraRightText}>{extraRightText}</Text>
          <Ionicons name="chevron-forward" style={styles.arrowIcon} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "transparent",
  },
  rightSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    color: "#9a9a9a",
    fontSize: 18,
  },
  extraRightTextWrapper: {},

  extraRightText: {
    color: "#9a9a9a",
  },
});

const sizes = StyleSheet.create({
  default: {
    fontSize: 16,
  },
  medium: { fontSize: 18 },
});
