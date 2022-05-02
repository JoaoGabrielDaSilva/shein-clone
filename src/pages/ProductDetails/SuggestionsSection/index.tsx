import React, { RefObject, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Animated, { SharedValue } from "react-native-reanimated";

import { ProductGrid } from "../../../components/ProductGrid";
import { StickyHeader } from "../../../components/StickyHeader";
import { Typography } from "../../../components/Typography";

type Props = {
  scroll: SharedValue<number>;
};

const SECTION_HEADER_HEIGHT = 50;
const NAVBAR_HEIGHT = 50;
const SUGGESTIONS_HEADER_HEIGHT = 20;

const EXTRA_HEIGHT =
  SECTION_HEADER_HEIGHT + NAVBAR_HEIGHT + SUGGESTIONS_HEADER_HEIGHT;

const tabs = [
  {
    name: "Vestidos Femininos",
  },
  {
    name: "Óculos de Sol",
  },
  {
    name: "Colares",
  },
  {
    name: "Brincos",
  },
  {
    name: "Acessórios",
  },
];

const products = [
  {
    key: 1,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 2,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 3,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 4,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 5,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 6,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 7,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
  {
    key: 8,
    price: 49.9,
    uri: "https://img.ltwebstatic.com/images3_pi/2021/10/20/163469596627a68c90e7d65a7c12daf5d145ef97ad_thumbnail_600x.webp",
  },
];

export const SuggestionsSection = React.forwardRef(
  ({ scroll }: Props, ref: RefObject<Animated.View>) => {
    const [selectedCategory, setSelectedCategory] = useState(tabs[0]);

    const handleSelectCategory = (category) => {
      setSelectedCategory(category);
    };

    return (
      <Animated.View ref={ref}>
        <Typography variant="heading" style={styles.title}>
          Você Também Pode Gostar
        </Typography>
        <StickyHeader scrollValue={scroll} topExtraHeight={EXTRA_HEIGHT}>
          <FlatList
            data={tabs}
            renderItem={({ item }) => (
              <RectButton
                onPress={() => handleSelectCategory(item)}
                style={styles.tab}
              >
                <Typography
                  variant="default"
                  bold={selectedCategory && selectedCategory.name === item.name}
                >
                  {item.name}
                </Typography>
              </RectButton>
            )}
            keyExtractor={(_, index) => String(Math.random() * 10000)}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 20 }}
          />
        </StickyHeader>
        <ProductGrid products={products} columns={2} />
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
  },
  tab: {
    height: 40,
    marginRight: 10,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
