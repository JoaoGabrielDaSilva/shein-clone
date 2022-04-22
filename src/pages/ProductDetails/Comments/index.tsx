import React, { RefObject, useEffect } from "react";
import { StyleSheet, Text, View, ViewProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";
import { ProgressBar } from "../../../components/ProgressBar";
import { ReviewStars } from "../../../components/ReviewStars";

type Props = ViewProps & {};

export const Comments = React.forwardRef(
  ({ ...props }: Props, ref: RefObject<Animated.View>) => {
    return (
      <Animated.View {...props} ref={ref} style={styles.container}>
        <Text style={styles.title}>Comentários (18)</Text>
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
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
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
});
