import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  title,
  showBackButton = true,
  onIconPress,
  iconName = "arrow-back",
  iconVisible = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name={iconName} size={24} color="#000" style={styles.icon} />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onIconPress}>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    flex: 1,
    textAlign: "center",
  },
  icon: {
    paddingHorizontal: 8,
  },
});

export default Header;
