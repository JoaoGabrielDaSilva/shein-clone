import React from "react";
import { StyleSheet, Text, View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps & {
  text: string;
};

export const ListItem = ({ text, style, ...props }: Props) => {
  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.dot} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 4.5,
    height: 4.5,
    borderRadius: 4.5,
    backgroundColor: "#00b859",
    marginRight: 5,
  },
  text: {
    fontSize: 12,
  },
});
