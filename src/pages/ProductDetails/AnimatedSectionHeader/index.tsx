import React, {
  RefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Dimensions,
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, {
  call,
  Extrapolate,
  interpolate,
  measure,
  runOnJS,
  runOnUI,
  SharedValue,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedStyle,
  useCode,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useDidUpdateEffect } from "../../../hooks/UseIsMount";

type Props = {
  animatedValue: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  options: {
    ref: RefObject<any>;
    label: string;
    onPress: () => void;
  }[];
  breakPoints: number[];
};

const { width, height } = Dimensions.get("window");

export const AnimatedSectionHeader = ({
  animatedValue,
  style,
  options,
  breakPoints,
}: Props) => {
  const breakPointsMap = useMemo(() => {
    return breakPoints.reduce((acc, item, index, array) => {
      const isLast = index === array.length - 1;

      const items = [...acc];

      if (item === 0) {
        items.push(0);
        return items;
      }

      items.push(item - 0.1, item);

      if (isLast) {
        items.push(item);
        return items;
      }

      return items;
    }, []);
  }, []);

  const opacityAnimations = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedValue.value,
        [0, height * 0.25 - 10, height * 0.25],
        [0, 0, 1]
      ),
    };
  });

  const indicatorStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: breakPointsMap
            ? withTiming(
                interpolate(
                  animatedValue.value,
                  breakPointsMap,
                  [29.81, 29.81, 156, 156, 287.27, 287.27]
                )
              )
            : 0,
        },
      ],
      width: withTiming(
        interpolate(
          animatedValue.value,
          breakPointsMap,
          [71.27, 71.27, 80.72, 80.72, 80, 80]
        )
      ),
    };
  });

  return (
    <Animated.View style={[styles.sections, opacityAnimations, style]}>
      {options.map((item, index) => (
        <RectButton onPress={item.onPress} key={index} style={styles.option}>
          <Animated.View>
            <Text ref={item.ref} style={styles.optionText}>
              {item.label}
            </Text>
          </Animated.View>
        </RectButton>
      ))}
      <Animated.View style={[styles.indicator, indicatorStyles]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sections: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  optionText: {
    fontWeight: "500",
  },
  indicator: {
    position: "absolute",
    bottom: 10,
    width: 30,
    height: 3,
    backgroundColor: "#000000",
  },
});
