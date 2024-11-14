import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../common/style";

const CryptoListComponent = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={style.crypListItem}
      onPress={() => navigation.navigate("CryptoDetail", { data: item })}
    >
      <View style={style.itemDataView}>
        <Text style={style.itemTitle}>
          {item.name} ({item.symbol.toUpperCase()})
        </Text>

        <View style={style.dataRow}>
          <Text style={style.label}>Current Price:</Text>
          <Text style={style.value}>${item.current_price.toFixed(2)}</Text>
        </View>

        <View style={style.dataRow}>
          <Text style={style.label}>Market Cap:</Text>
          <Text style={style.value}>${item.market_cap.toLocaleString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CryptoListComponent;
