import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import getMarketScreenStyles from "./MarketScreenStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWindowDimensions } from "react-native";
import useMock from "../../models/useMock";
import { AppBar, TabBar } from "../../common/commonIndex";
import {
  Card,
  Category,
  CategoryModal,
  UsageModal,
} from "../../components/Market/marketComponentsIndex";
import useModal from "../../hooks/useModal";

const MarketScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const marketStyles = getMarketScreenStyles(width, height);
  const categoryModal = useModal();
  const usageModal = useModal();
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedUsage, setSelectedUsage] = useState("전체");

  const mockData = [
    {
      id: 1,
      title: "스타벅스 아메리카노",
      point: 100,
      category: "카페",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 2,
      title: "맥도날드 세트",
      point: 200,
      category: "패스트푸드",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 3,
      title: "CGV 영화관람권",
      point: 300,
      category: "영화",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 4,
      title: "배스킨라빈스",
      point: 150,
      category: "디저트",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 5,
      title: "올리브영 상품권",
      point: 250,
      category: "뷰티",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 6,
      title: "교보문고 도서권",
      point: 180,
      category: "도서",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
    {
      id: 7,
      title: "컬쳐랜드 상품권",
      point: 500,
      category: "문화",
      img: require("../../assets/AppBarImages/covers/cover1.jpg"),
    },
  ];

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    console.log("선택된 카테고리:", category);
  };

  const handleUsageSelect = usage => {
    setSelectedUsage(usage);
    console.log("선택된 사용 여부:", usage);
  };

  return (
    <>
      <AppBar />
      <SafeAreaView style={marketStyles.safeArea}>
        <View style={marketStyles.backgroundStyle}>
          <Text style={marketStyles.point}>
            내 잔여 포인트: 300
            <Text style={marketStyles.pointP}> points</Text>
          </Text>
          <View style={marketStyles.category}>
            <Category
              title={
                selectedCategory === "전체" ? "카테고리" : selectedCategory
              }
              onPress={categoryModal.openModal}
            />
            <Category
              title={selectedUsage === "전체" ? "사용 여부" : selectedUsage}
              onPress={usageModal.openModal}
            />
            {/* TODO: 포인트 범위 설정 */}
            <Category title="포인트" />
          </View>
          <View style={marketStyles.cardsWrapper}>
            <FlatList
              data={mockData}
              numColumns={2}
              keyExtractor={item => item.id.toString()}
              contentContainerStyle={marketStyles.cards}
              columnWrapperStyle={marketStyles.columnWrapper}
              renderItem={({ item }) => (
                <Card
                  navigation={navigation}
                  title={item.title}
                  point={item.point}
                  category={item.category}
                  img={item.img}
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
      <TabBar navigation={navigation} />

      <CategoryModal
        isVisible={categoryModal.isVisible}
        onClose={categoryModal.closeModal}
        onCategorySelect={handleCategorySelect}
      />
      <UsageModal
        isVisible={usageModal.isVisible}
        onClose={usageModal.closeModal}
        onUsageSelect={handleUsageSelect}
      />
    </>
  );
};

export default MarketScreen;
