import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Comment as CommentInterface } from "../../models/Comment";
import { ReviewStars } from "../ReviewStars";
import { Typography } from "../Typography";

type Props = CommentInterface & ViewProps;

const { width } = Dimensions.get("screen");

export const Comment = ({
  name,
  note,
  date,
  product,
  text,
  images,
  likes,
  style,
  ...props
}: Props) => {
  return (
    <View style={[style, styles.container]} {...props}>
      <View style={styles.header}>
        <View style={styles.headerLeftSide}>
          <Typography bold style={styles.name}>
            {name}
          </Typography>
          <ReviewStars note={note} size="default" />
        </View>
        <Typography>{date}</Typography>
      </View>
      <Typography style={styles.specifications} color="#a2a2a2">
        Cor: {product.color} / Tamanho:{product.size}
      </Typography>
      <Typography style={styles.text}>{text}</Typography>

      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(_, index) => String(index)}
        horizontal
      />
      <View style={styles.footer}>
        <BorderlessButton>
          <Feather name="thumbs-up" style={styles.icons} />
        </BorderlessButton>
        <Typography style={styles.likeText} color="#a2a2a2">
          Útil ({likes})
        </Typography>
        <BorderlessButton>
          <Feather name="more-horizontal" style={styles.icons} />
        </BorderlessButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    marginRight: 10,
  },

  headerLeftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  specifications: {
    marginVertical: 10,
  },
  text: {
    marginBottom: 10,
  },
  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginRight: 2.5,
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  likeText: {
    marginRight: 10,
  },

  icons: {
    fontSize: RFValue(14),
    marginHorizontal: 5,
  },
});
