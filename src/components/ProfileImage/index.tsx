import React from "react";
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("screen");

type Props = {
  uri?: string;
  style?: StyleProp<ImageStyle>;
};

export const ProfileImage = ({ uri, style }: Props) => {
  return <Image source={{ uri }} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: 100,
  },
});
