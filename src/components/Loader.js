import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import color from "../common/color";

const Loader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={color.color_black} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
});

export default Loader;
