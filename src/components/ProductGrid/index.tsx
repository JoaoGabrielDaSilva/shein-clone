import React from "react";
import { FlatList } from "react-native";
import { ProductCard } from "../Cards/ProductCard";

type Props = {
  products: [];
  columns?: number;
};

export const ProductGrid = ({ products, columns = 1 }: Props) => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard {...item} />}
      keyExtractor={(_, index) => String(Math.random() * 10000)}
      numColumns={columns}
      columnWrapperStyle={{
        margin: 20,
        justifyContent: "space-between",
      }}
    />
  );
};
