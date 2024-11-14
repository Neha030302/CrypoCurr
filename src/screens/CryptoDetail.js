import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Header from "../components/Header";
import Loader from "../components/Loader";
import style from "../common/style";

const CryptoDetail = ({ route }) => {
  const { data } = route.params;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [data]);

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <ScrollView style={style.container}>
      <Header
        title="Cryptocurrency Detail"
        showBackButton={true}
        iconVisible={false}
      />

      <Image
        source={{ uri: data.image }}
        style={style.image}
        resizeMode="contain"
      />

      <View style={style.detailContainer}>
        <Text style={style.title}>{data.name}</Text>
        <Text style={style.symbol}>{data.symbol.toUpperCase()}</Text>

        <View style={style.card}>
          <Text style={style.cardTitle}>Current Price</Text>
          <Text style={style.cardValue}>${data.current_price}</Text>
        </View>

        <View style={style.card}>
          <Text style={style.cardTitle}>Market Cap</Text>
          <Text style={style.cardValue}>${data.market_cap}</Text>
        </View>

        <View style={style.card}>
          <Text style={style.cardTitle}>24h Price Change</Text>
          <Text style={style.cardValue}>${data.price_change_24h}</Text>
        </View>

        <View style={style.card}>
          <Text style={style.cardTitle}>All-Time High</Text>
          <Text style={style.cardValue}>${data.ath}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CryptoDetail;
