import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions, Alert } from "react-native";
import getMarketDetailScreenStyles from "./MarketDetailScreenStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppBar, TabBar } from "../../common/commonIndex";
import { Product } from "../../components/Market/marketComponentsIndex";
import { getMarketItem } from "../../models/market";
import { useProfileStore } from "../../store/store";
import useAccessToken from "../../models/accessToken";

const MarketDetailScreen = ({ navigation, route }) => {
    const { width, height } = useWindowDimensions();
    const marketDetailStyles = getMarketDetailScreenStyles(width, height);
    const [marketItem, setMarketItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const accessToken = useAccessToken();
    const profileUser = useProfileStore(state => state.profileUser);
    const { item_id, item } = route.params || {};

    useEffect(() => {
        const fetchMarketItem = async () => {
            try {
                setLoading(true);
                if (item) {
                    setMarketItem(item);
                } else if (item_id) {
                    const itemData = await getMarketItem(item_id, accessToken);
                    setMarketItem(itemData);
                } else {
                    throw new Error("상품 정보가 없습니다.");
                }
            } catch (error) {
                console.error("마켓 아이템 상세 불러오기 실패:", error);
                Alert.alert("오류", "상품 정보를 불러오는데 실패했습니다.", [
                    { text: "확인", onPress: () => navigation.goBack() },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchMarketItem();
    }, [item_id, item, accessToken, navigation]);

    if (loading) {
        return (
            <>
                <AppBar />
                <SafeAreaView style={marketDetailStyles.safeArea}>
                    <View style={marketDetailStyles.backgroundStyle}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={marketDetailStyles.touchBackArrow}>
                            <Image
                                style={marketDetailStyles.backArrow}
                                source={require("../../assets/icons/backArrowWrapper.png")}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', marginTop: 100 }}>로딩 중...</Text>
                    </View>
                </SafeAreaView>
                <TabBar navigation={navigation} />
            </>
        );
    }

    if (!marketItem) {
        return (
            <>
                <AppBar />
                <SafeAreaView style={marketDetailStyles.safeArea}>
                    <View style={marketDetailStyles.backgroundStyle}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={marketDetailStyles.touchBackArrow}>
                            <Image
                                style={marketDetailStyles.backArrow}
                                source={require("../../assets/icons/backArrowWrapper.png")}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', marginTop: 100 }}>상품을 찾을 수 없습니다.</Text>
                    </View>
                </SafeAreaView>
                <TabBar navigation={navigation} />
            </>
        );
    }

    return (
        <>
            <AppBar />
            <SafeAreaView style={marketDetailStyles.safeArea}>
                <View style={marketDetailStyles.backgroundStyle}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={marketDetailStyles.touchBackArrow}>
                        <Image
                            style={marketDetailStyles.backArrow}
                            source={require("../../assets/icons/backArrowWrapper.png")}
                        />
                    </TouchableOpacity>
                    <Product
                        productImage={{ uri: marketItem.image_url }}
                        productTitle={marketItem.name}
                        productDescription={marketItem.description}
                        productPoint={marketItem.cost}
                        productStock={marketItem.stock}
                        productCategory={marketItem.category}
                        myPoint={profileUser?.points || 0}
                        navigation={navigation}
                        item_id={marketItem.item_id}
                        marketItem={marketItem}
                    />
                </View>
            </SafeAreaView>
            <TabBar navigation={navigation} />
        </>
    );
};

export default MarketDetailScreen;
