import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { StackHeaderProps } from "@react-navigation/stack";
import React, { ReactElement } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { SharedValue } from "react-native-reanimated";

type Props = StackHeaderProps & {
  middleComponent: () => ReactElement;
};

const { width } = Dimensions.get("window");

export const Navbar = ({ navigation, middleComponent }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back"
        style={styles.icons}
        onPress={navigation?.goBack}
      />
      {middleComponent && (
        <View style={styles.middle}>{middleComponent()}</View>
      )}
      <View style={styles.right}>
        <SimpleLineIcons name="bag" style={[styles.icons, styles.bagIcon]} />
        <Ionicons name="ellipsis-horizontal" style={styles.icons} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  middle: {
    position: "absolute",
    left: width / 2 - 20,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    fontSize: 22,
  },
  bagIcon: {
    marginRight: 15,
  },
});
