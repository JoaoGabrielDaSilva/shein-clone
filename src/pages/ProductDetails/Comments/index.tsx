import React, { RefObject, useEffect } from "react";
import { Text, View, ViewProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";

type Props = ViewProps & {};

export const Comments = React.forwardRef(
  ({ ...props }: Props, ref: RefObject<Animated.View>) => {
    return (
      <Animated.View {...props} ref={ref}>
        <Text>Comentários (18)</Text>
      </Animated.View>
    );
  }
);
