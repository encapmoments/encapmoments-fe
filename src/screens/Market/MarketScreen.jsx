import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import getMarketScreenStyles from "./MarketScreenStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import { AppBar, TabBar } from "../../common/commonIndex";
import { Card, Category, CategoryModal, PointModal } from "../../components/Market/marketComponentsIndex";
import useModal from "../../hooks/useModal";
import { getMarketItems } from "../../models/market";
import { getProfileUser } from "../../models/profile";
import useAccessToken from "../../models/accessToken";

const MarketScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const marketStyles = getMarketScreenStyles(width, height);
  const categoryModal = useModal();
  const pointModal = useModal();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedPoint, setSelectedPoint] = useState("전체");
  const [marketItems, setMarketItems] = useState([]);
  const [userPoints, setUserPoints] = useState(0);
  const [loading, setLoading] = useState(true);
  const accessToken = useAccessToken();

  useEffect(() => {
    const fetchUserPoints = async () => {
      try {
        const profile = await getProfileUser(accessToken);
        setUserPoints(profile.points || 0);
      } catch (error) {
        console.error("사용자 포인트 불러오기 실패:", error);
        setUserPoints(0);
      }
    };

    if (accessToken) {
      fetchUserPoints();
    }
  }, [accessToken]);

  useEffect(() => {
    const fetchMarketItems = async () => {
      try {
        setLoading(true);
        const items = await getMarketItems(accessToken);
        setMarketItems(items);
      } catch (error) {
        console.error("마켓 아이템 불러오기 실패:", error);
        Alert.alert("오류", "마켓 아이템을 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarketItems();
  }, [accessToken]);

  const getFilteredItems = () => {
    let filtered = marketItems;

    if (selectedCategory !== "전체") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedPoint !== "전체") {
      const pointRanges = {
        "전체": [0, Infinity],
        "~1000p": [0, 1000],
        "1001~2000p": [1001, 2000],
        "2001~3000p": [2001, 3000],
        "3001p~": [3001, Infinity],
      };
      if (pointRanges[selectedPoint]) {
        const [min, max] = pointRanges[selectedPoint];
        filtered = filtered.filter(item => item.cost >= min && item.cost <= max);
      }
    }

    return filtered;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handlePointSelect = (point) => {
    setSelectedPoint(point);
  };

  const handleCardPress = (item) => {
    navigation.navigate("MarketDetail", {
      item_id: item.item_id,
      item: item,
    });
  };

  const filteredItems = getFilteredItems();

  return (
    <>
      <AppBar />
      <SafeAreaView style={marketStyles.safeArea}>
        <View style={marketStyles.backgroundStyle}>
          <Text style={marketStyles.point}>
            내 잔여 포인트: {userPoints}
            <Text style={marketStyles.pointP}> points</Text>
          </Text>
          <View style={marketStyles.category}>
            <Category
              title={selectedCategory === "전체" ? "카테고리" : selectedCategory}
              onPress={categoryModal.openModal}
            />
            <Category
              title={selectedPoint === "전체" ? "포인트" : selectedPoint}
              onPress={pointModal.openModal}
            />
          </View>
          <View style={marketStyles.cardsWrapper}>
            {loading ? (
              <Text style={marketStyles.emptyText}>로딩 중...</Text>
            ) : (
              <FlatList
                data={filteredItems}
                numColumns={2}
                keyExtractor={item => item.item_id.toString()}
                contentContainerStyle={marketStyles.cards}
                columnWrapperStyle={marketStyles.columnWrapper}
                renderItem={({ item }) => (
                  <Card
                    navigation={navigation}
                    title={item.name}
                    point={item.cost}
                    category={item.category}
                    img={{ uri: item.image_url }}
                    onPress={() => handleCardPress(item)}
                    item_id={item.item_id}
                  />
                )}
                showsVerticalScrollIndicator={true}
                ListEmptyComponent={
                  <Text style={marketStyles.emptyText}>
                    해당하는 상품이 없습니다.
                  </Text>
                }
              />
            )}
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />

      <CategoryModal
        isVisible={categoryModal.isVisible}
        onClose={categoryModal.closeModal}
        onCategorySelect={handleCategorySelect}
      />
      <PointModal
        isVisible={pointModal.isVisible}
        onClose={pointModal.closeModal}
        onPointSelect={handlePointSelect}
      />
    </>
  );
};

export default MarketScreen;
