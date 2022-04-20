import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  note: number;
};

export const ReviewStars = ({ note }: Props) => {
  const a = Array.from({ length: 5 });
  return (
    <View style={styles.row}>
      {a.map((_, index) =>
        index + 1 <= note ? (
          <Ionicons
            key={index}
            name="star"
            style={styles.star}
            color="#ffe100"
          />
        ) : (
          <Ionicons
            key={index}
            name="star-outline"
            style={styles.star}
            color="#ffe100"
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 13,
  },
});
