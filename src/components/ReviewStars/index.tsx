import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

type Size = "default" | "big";

const sizes = {
  default: 18,
  big: 25,
};

type Props = {
  note: number;
  size: Size;
};

export const ReviewStars = ({ note, size = "default" }: Props) => {
  const a = Array.from({ length: 5 });
  return (
    <View style={styles().row}>
      {a.map((_, index) =>
        index + 1 <= note ? (
          <Ionicons
            key={index}
            name="star"
            style={styles(size).star}
            color="#ffe100"
          />
        ) : (
          <Ionicons
            key={index}
            name="star-outline"
            style={styles(size).star}
            color="#ffe100"
          />
        )
      )}
    </View>
  );
};

const styles = (size?: Size) =>
  StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    star: {
      fontSize: sizes[size],
    },
  });
