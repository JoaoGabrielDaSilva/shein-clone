import React, { RefObject } from "react";
import {
  ColorValue,
  FlexAlignType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { StyleProps } from "react-native-reanimated";

type ButtonVariants = "containedFull";

type Props = {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariants;
  backgroundColor?: ColorValue;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  alignItems?: FlexAlignType;
  justifyContent?: FlexAlignType;
};

export const Button = ({
  text,
  onPress,
  disabled,
  loading,
  variant = "containedFull",
  backgroundColor,
  color,
  style,
  textStyle,
  alignItems,
  justifyContent,
}: Props) => {
  return (
    <RectButton
      style={[
        variantStyle[variant],
        style,
        customStyles({ alignItems, justifyContent }).container,
      ]}
    >
      <Text style={[textStyle, variantTextStyle[variant]]}>{text}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const variantStyle = StyleSheet.create({
  containedFull: {
    flex: 1,
    height: 40,
    backgroundColor: "black",
  },
});

const variantTextStyle = StyleSheet.create({
  containedFull: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

const customStyles = (props: StyleSheet.NamedStyles<{}>) =>
  StyleSheet.create({
    container: props,
  });
