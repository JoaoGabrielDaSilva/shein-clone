import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { Typography } from "../../Typography";

const { width } = Dimensions.get("screen");

type Props = {
  price: number;
  uri: string;
};

export const ProductCard = ({ price, uri }: Props) => {
  return (
    <View>
      <View style={styles.imageWrapper}>
        <Image source={{ uri }} style={styles.image} />
      </View>
      <Typography
        variant="medium"
        bold
        style={styles.price}
      >{`R$${price}`}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width: width * 0.43,
    height: width * 0.6,
  },
  image: {
    flex: 1,
  },
  price: {
    marginTop: 10,
  },
});
