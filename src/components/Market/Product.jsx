import { View, Text, Image, useWindowDimensions } from "react-native";
import ProductStyles from "./ProductStyles";
import Pay from "./Pay";

const Product = ({ productImage, productTitle, productPoint, myPoint, navigation }) => {

    const { width, height } = useWindowDimensions();
    const productStyles = ProductStyles(width, height);

    return (
        <View style={productStyles.backgroundStyle}>
            <View style={productStyles.productWrapper}>
                <Image source= {productImage} alt="productImage" style={productStyles.productImage} />
                <Text style={productStyles.productText}>{productTitle}</Text>
                <Text style={productStyles.productText}>{productPoint}<Text style={productStyles.pointOrange}> points</Text></Text>
                <View style={productStyles.pointWrapper}>
                    <Text style={productStyles.point}>내 포인트 : {myPoint}<Text style={productStyles.pointOrange}> points</Text></Text>
                    <Text style={productStyles.pointMinus}>- 차감 포인트 : {productPoint}<Text style={productStyles.pointOrange}> points</Text></Text>
                    <View style={productStyles.pointBar} />
                    <Text style={productStyles.point}>잔여 포인트 : { myPoint - productPoint }<Text style={productStyles.pointOrange}> points</Text></Text>
                </View>
                    <Pay navigation={navigation} />
            </View>
        </View>
    );
};

export default Product;
