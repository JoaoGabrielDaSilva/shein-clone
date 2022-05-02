import { Feather, Ionicons } from "@expo/vector-icons";
import React, { RefObject, useEffect } from "react";
import {
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { Comment } from "../../../components/Comment";
import { ProgressBar } from "../../../components/ProgressBar";
import { ReviewStars } from "../../../components/ReviewStars";
import { Typography } from "../../../components/Typography";
import { Comment as CommentInterface } from "../../../models/Comment";

const comments: CommentInterface[] = [
  {
    name: "joao",
    date: "05/12/2021",
    likes: 117,
    note: 5,
    product: {
      color: "black",
      size: "S",
    },
    text: "Eu ameeiii, ela é linda e por dentro de um tecido bem fofinho, tipo manta, por dentro, ela veio do tamanho certinho, ac or veio certinho de acordo com a foto",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784718a03e2e7a473592c5e14f5b2253f06e09.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784726bf4dd225f7cd171309fcc6ed92bb0aed.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784731a0b3548c04c79ea1c20b7815a38fc244.webp",
    ],
  },
  {
    name: "duda",
    date: "05/12/2021",
    likes: 117,
    note: 5,
    product: {
      color: "black",
      size: "S",
    },
    text: "Eu ameeiii, ela é linda e por dentro de um tecido bem fofinho, tipo manta, por dentro, ela veio do tamanho certinho, ac or veio certinho de acordo com a foto",
    images: [
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784718a03e2e7a473592c5e14f5b2253f06e09.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784726bf4dd225f7cd171309fcc6ed92bb0aed.webp",
      "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784731a0b3548c04c79ea1c20b7815a38fc244.webp",
    ],
  },
];

type Props = ViewProps & {};

export const CommentsSection = React.forwardRef(
  ({ ...props }: Props, ref: RefObject<Animated.View>) => {
    return (
      <Animated.View {...props} ref={ref} style={styles.container}>
        <Typography variant="heading">Comentários (18)</Typography>
        <View style={styles.statistics}>
          <View style={styles.noteContainer}>
            <Text style={styles.note}>5</Text>
            <ReviewStars note={5} size="big" />
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>
              Será que o item vai se adaptar bem?
            </Text>
            <ProgressBar
              label="Pequeno"
              percentage={0.6}
              style={{ marginVertical: 10 }}
            />
            <ProgressBar
              label="Fiel ao tamanho"
              percentage={9.4}
              style={{ marginBottom: 10 }}
            />
            <ProgressBar
              label="Grande"
              percentage={0}
              style={{ marginBottom: 10 }}
            />
          </View>
        </View>
        <FlatList
          data={comments}
          renderItem={({ item }: ListRenderItemInfo<CommentInterface>) => (
            <Comment {...item} style={{ marginTop: 10 }} />
          )}
          keyExtractor={(_, index) => String(index)}
        />
        <View style={styles.seeMore}>
          <Typography color="#A2A2A2" variant="medium">
            Ver mais
          </Typography>
          <Ionicons name="chevron-forward" style={styles.rightArrow} />
        </View>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  statistics: {
    padding: 20,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  noteContainer: {
    flex: 1,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  note: {
    fontWeight: "bold",
    fontSize: 30,
  },
  progressContainer: { flex: 2 },
  progressText: {
    fontSize: 12,
  },
  seeMore: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "transparent",
    borderTopColor: "#f1f1f1",
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rightArrow: {
    fontSize: RFValue(18),
    color: "#A2A2A2",
  },
});
