import React, { ReactChild, ReactChildren, ReactNode } from "react";
import { ColorValue, StyleSheet, Text, TextProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Variant = "heading" | "title" | "default" | "medium";

type StyleProps = {
  color: ColorValue;
  bold: boolean;
};

type Props = TextProps & {
  children?: ReactNode;
  variant?: Variant;
  color?: ColorValue;
  bold?: boolean;
};

export const Typography = ({
  children,
  variant = "default",
  color = "#000000",
  style,
  bold = false,
  ...props
}: Props) => {
  return (
    <Text
      style={[
        style,
        styles({ color, bold }).typography,
        variantStyles[variant],
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

const styles = ({ color, bold }: StyleProps) =>
  StyleSheet.create({
    typography: {
      color,
      fontWeight: bold ? "bold" : "normal",
    },
  });

const variantStyles = StyleSheet.create({
  default: {
    fontSize: RFValue(12),
  },
  medium: {
    fontSize: RFValue(14),
  },

  heading: {
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
  title: {
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});
