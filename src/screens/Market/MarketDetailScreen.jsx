import React from "react";
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import getMarketDetailScreenStyles from "./MarketDetailScreenStyles";
import { SafeAreaView } from "react-native-safe-area-context";
import useMock from "../../models/useMock";
import { AppBar, TabBar } from "../../common/commonIndex";
import { Product, Pay } from "../../components/Market/marketComponentsIndex";

const MarketDetailScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    const marketDetailStyles = getMarketDetailScreenStyles(width, height);

    return (
        <>
            <AppBar />
            <SafeAreaView style={marketDetailStyles.safeArea}>
                <View style={marketDetailStyles.backgroundStyle}>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                        style={marketDetailStyles.touchBackArrow}>
                        <Image
                            style={marketDetailStyles.backArrow}
                            source={require("../../assets/icons/backArrowWrapper.png")}
                        />
                    </TouchableOpacity>
                    <Product
                        productImage={require("../../assets/mock/mission/mission1.jpg")}
                        productTitle={"빙그레) 바나나우유 180ml"}
                        productPoint={300}
                        myPoint={1000}
                        navigation={navigation}
                    />
                </View>
            </SafeAreaView>
            <TabBar navigation={navigation} />
        </>
    );
};

export default MarketDetailScreen;
