import React, { useEffect, useState } from "react";
import { View, FlatList, Alert, StatusBar, Text } from "react-native";
import { fetchCryptoData } from "../services/api";
import style from "../common/style";
import Header from "../components/Header";
import Loader from "../components/Loader";
import CryptoListComponent from "../components/CryptoListComponent";
import color from "../common/color";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await fetchCryptoData();
      setCryptoData(data);
    } catch (error) {
      Alert.alert(
        "Data Fetch Error",
        "Failed to load data. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => <CryptoListComponent item={item} />;

  return (
    <View style={style.container}>
      <StatusBar
        backgroundColor={color.color_white}
        barStyle={"dark-content"}
      />
      <Header
        title="Cryptocurrency Data"
        showBackButton={false}
        iconVisible={false}
      />
      {cryptoData.length > 0 ? (
        <FlatList
          style={{ marginTop: 10 }}
          data={cryptoData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <View style={style.emptyContainer}>
          <Text style={style.emptyText}>Data Not Found</Text>
        </View>
      )}
      <Loader isLoading={loading} />
    </View>
  );
};

export default CryptoList;
