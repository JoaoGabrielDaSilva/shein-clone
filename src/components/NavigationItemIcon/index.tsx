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

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  onPress?: () => void;
  children?: ReactElement;
  contentContainerStyle: StyleProp<ViewStyle>;
  borderless?: boolean;
};

export const NavigationItemIcon = ({
  icon,
  children,
  contentContainerStyle,
  borderless = false,
  onPress,
}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.container,
          { borderBottomColor: borderless ? "transparent" : "#E4E4E4" },
        ]}
      >
        <MaterialCommunityIcons name={icon} style={styles.icon} />
        <View style={[styles.content, contentContainerStyle]}>{children}</View>

        <Ionicons name="chevron-forward" style={styles.arrowIcon} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
  },
  icon: {
    alignSelf: "flex-start",
    color: "#00b859",
    fontSize: 22,
    marginRight: 10,
  },
  arrowIcon: {
    color: "#9a9a9a",
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
});
