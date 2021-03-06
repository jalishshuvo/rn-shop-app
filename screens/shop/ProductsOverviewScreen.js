import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text> {itemData.item.title} </Text>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All products",
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
