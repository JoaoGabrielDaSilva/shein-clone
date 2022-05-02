import React, { ReactNode, useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

type Props = {
  scrollValue: SharedValue<number>;
  topExtraHeight: number;
  children: ReactNode;
};

export const StickyHeader = ({
  scrollValue,
  topExtraHeight,
  children,
}: Props) => {
  const [y, setY] = useState(0);

  const ref = useRef<Animated.View>();

  useEffect(() => {
    getMeasures();
  }, [ref]);

  const getMeasures = () => {
    ref.current.measure((x, y, width, height, pageX, pageY) => {
      setY(pageY);
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollValue.value + topExtraHeight,
            [y - 1, y, y + 1],
            [0, 0, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]} ref={ref}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    zIndex: 3,
  },
});
