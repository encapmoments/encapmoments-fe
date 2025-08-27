import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";
import getCardStyles from "./CardStyles";

const Card = ({ title, point, category, img, navigation, onPress, item_id }) => {
  const { width, height } = useWindowDimensions();
  const cardStyles = getCardStyles(width, height);

  const handleMarketCard = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.navigate("MarketDetail");
    }
  };

  return (
    <View style={cardStyles.card}>
      <TouchableOpacity onPress={handleMarketCard}>
        {img && (
          <Image
            source={typeof img === "string" ? { uri: img } : img}
            style={cardStyles.cardImage}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
      <Text style={cardStyles.cardOptions}>{title}</Text>
      <Text style={cardStyles.cardOptions}>
        {point}
        <Text style={cardStyles.pointP}> p</Text>
      </Text>
      <Text style={cardStyles.cardOptions}>
        <Text style={cardStyles.cate}># </Text>
        {category}
      </Text>
    </View>
  );
};

export default Card;
