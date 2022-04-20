import React, { RefObject, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  ListRenderItemInfo,
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Constants from "expo-constants";
import { ProductInfo } from "./ProductInfo";
import { Navbar } from "../../components/Navbar";
import { ProductSize } from "../../models/Product";
import { AnimatedSectionHeader } from "./AnimatedSectionHeader";
import { Button } from "../../components/Button";
import { Ionicons } from "@expo/vector-icons";

const productImages = [
  "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784718a03e2e7a473592c5e14f5b2253f06e09.webp",
  "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784726bf4dd225f7cd171309fcc6ed92bb0aed.webp",
  "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641784731a0b3548c04c79ea1c20b7815a38fc244.webp",
];

type Sizes = ProductSize & {
  measurements: {
    name: string;
    value: string;
  }[];
};

const sizes: Sizes[] = [
  {
    ageRange: "7-8 anos",
    number: 130,
    measurements: [
      {
        name: "Ombro",
        value: "24cm",
      },
      {
        name: "Comprimento",
        value: "32cm",
      },
      {
        name: "Busto",
        value: "68cm",
      },
    ],
  },
  {
    ageRange: "9-1 anos",
    number: 140,
    measurements: [
      {
        name: "Ombro",
        value: "26cm",
      },
      {
        name: "Comprimento",
        value: "34cm",
      },
      {
        name: "Busto",
        value: "73cm",
      },
    ],
  },
  {
    ageRange: "11-12 anos",
    number: 150,
    measurements: [
      {
        name: "Ombro",
        value: "28cm",
      },
      {
        name: "Comprimento",
        value: "36cm",
      },
      {
        name: "Busto",
        value: "78cm",
      },
    ],
  },
  {
    ageRange: "13-14 anos",
    number: 160,
    measurements: [
      {
        name: "Ombro",
        value: "30cm",
      },
      {
        name: "Comprimento",
        value: "38cm",
      },
      {
        name: "Busto",
        value: "83cm",
      },
    ],
  },
];

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const { width, height } = Dimensions.get("window");

export const ProductDetails = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const scroll = useSharedValue(0);
  const scale = useSharedValue(1);

  const layoutBreakpoints = [200, 500];

  const toggleFavoriteFavorite = () => {
    scale.value = 0;
    scale.value = withTiming(1);

    setIsFavorite(!isFavorite);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      const offset = e.contentOffset.y;

      scroll.value = offset;
    },
  });

  const imageStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scroll.value,
        [0, height * 0.5],
        [height * 0.65, height * 0.1]
      ),
    };
  });

  const flatlistStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scroll.value, [-100, 0, 1], [1.4, 1, 1], {
            extrapolateLeft: Extrapolate.CLAMP,
          }),
        },
      ],
    };
  });

  const opacityAnimations = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scroll.value,
        [0, height * 0.2, height * 0.25],
        [0, 0, 1]
      ),
    };
  });

  const favoriteStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <Navbar
        {...props}
        animatedValue={scroll.value}
        middleComponent={() => (
          <Animated.Image
            source={{ uri: productImages[0] }}
            style={[styles.productRoundImage, opacityAnimations]}
          />
        )}
      />
      <AnimatedSectionHeader
        animatedValue={scroll}
        style={{ position: "absolute", top: 44, zIndex: 3 }}
        options={[
          {
            label: "Mercadoria",
            ref: useAnimatedRef(),
          },
          {
            label: "Comentários",
            ref: useAnimatedRef(),
          },
          {
            label: "Recomendar",
            ref: useAnimatedRef(),
          },
        ]}
        breakPoints={layoutBreakpoints}
      />

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
      >
        <AnimatedFlatlist
          data={productImages}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item, index }: ListRenderItemInfo<string>) => (
            <Animated.View style={[styles.imageWrapper, imageStyles]}>
              <Image source={{ uri: item }} style={styles.image} />
              <View style={styles.itemsLength}>
                <Text style={styles.itemsLengthText}>
                  {index + 1}/{productImages.length}
                </Text>
              </View>
            </Animated.View>
          )}
          style={flatlistStyles}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <ProductInfo
          price={25.99}
          title="Coração ocasional Regata & Camisa"
          note={10}
          numberOfReviews={17}
          sizes={sizes}
        />

        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
        <Text>123</Text>
      </Animated.ScrollView>
      <View style={styles.footer}>
        {isFavorite ? (
          <AnimatedIcon
            name="heart"
            style={[styles.favorite, favoriteStyles]}
            onPress={toggleFavoriteFavorite}
          />
        ) : (
          <AnimatedIcon
            name="heart-outline"
            style={[styles.favorite, favoriteStyles]}
            onPress={toggleFavoriteFavorite}
          />
        )}
        <Button
          onPress={() => {}}
          text="ADICIONAR AO CARRINHO"
          alignItems="center"
          justifyContent="center"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    width,
  },
  image: {
    flex: 1,
  },
  itemsLength: {
    position: "absolute",
    alignSelf: "center",
    bottom: 0,
    marginBottom: 15,
    backgroundColor: "#939393",
    paddingVertical: 2.5,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  itemsLengthText: {
    color: "#FFFFFF",
  },
  productRoundImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "transparent",
    borderTopColor: "#e4e4e4",
  },
  favorite: {
    fontSize: 35,
    marginRight: 10,
  },
});
