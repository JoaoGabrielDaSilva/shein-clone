import React from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Conditional =
  | {
      value: number;
      total: number;
      percentage?: number;
    }
  | { value?: number; total?: number; percentage: number };

type Props = Conditional & {
  label?: string;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

type Styles = {
  color?: ColorValue;
  percentage: number;
};

export const ProgressBar = ({
  value,
  total,
  percentage,
  label,
  color,
  style,
}: Props) => {
  const percentageValue = percentage === undefined ? value / total : percentage;

  return (
    <View style={[styles.container, style]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.barWrapper}>
        <View style={styles.barContainer}>
          <View
            style={stylesWithProps({ percentage: percentageValue, color }).bar}
          />
        </View>
        <Text style={styles.percentage}>
          {percentageValue * (percentage ? 1 : 100)}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    flex: 0.5,
    fontSize: 12,
    marginRight: 10,
    alignSelf: "flex-start",
  },
  barWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  barContainer: {
    flex: 1,
    height: 10,
    flexDirection: "row",
    backgroundColor: "#e2e0e0",
  },
  percentage: {
    textAlign: "right",
    minWidth: "15%",
    fontSize: 12,
    marginLeft: 10,
  },
});

const stylesWithProps = ({ percentage, color = "#000000" }: Styles) =>
  StyleSheet.create({
    bar: {
      flex: percentage,
      backgroundColor: color,
    },
  });
